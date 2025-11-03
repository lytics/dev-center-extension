/**
 * Lytics Network Request Handler
 * Handles network traffic interception, parsing, and storage of Lytics API requests
 */

import { EmitLog } from '@root/src/shared/components/EmitLog';
import { appContent } from '@src/shared/content/appContent';
import { EventModel } from '@src/shared/models/eventModel';
import tagActivityStore from '@src/shared/storages/tagActivityStorage';
import domainStateStore from '@src/shared/storages/tabStateStorage';

// --------------------------------------------------------
// Type Definitions
// --------------------------------------------------------

type LyticsRequestType =
  | 'load-js-tag'
  | 'load-profile'
  | 'collect-data'
  | 'load-pathfora-tag'
  | 'load-pathfora-css'
  | 'load-experience-config'
  | 'load-campaign-config';

interface ParsedBodyData {
  [key: string]: string;
}

interface QueryParams {
  [key: string]: string;
}

interface NetworkRequestDetails {
  tabId?: number;
  initiator?: string;
  url: string;
  requestBody?: {
    formData?: {
      _js?: string[];
    };
  };
}

export interface NetworkTrafficHandlerDependencies {
  getStickyDomain: () => string;
}

// --------------------------------------------------------
// Request Parsing Utilities
// --------------------------------------------------------

/**
 * Gets the appropriate description for a Lytics request type from centralized content
 */
const getRequestDescription = (type: LyticsRequestType): string => {
  return appContent.lyticsRequestDescriptions[type];
};

/**
 * Parses query parameters from a URL search string
 */
const parseQueryParameters = (search: string): QueryParams => {
  const queryParams = new URLSearchParams(search);
  const queryParamObj: QueryParams = {};

  queryParams.forEach((value, key) => {
    queryParamObj[key] = value;
  });

  return queryParamObj;
};

/**
 * Parses body data from a URLSearchParams object
 */
const parseBodyData = (body: URLSearchParams | null): ParsedBodyData => {
  const parsedBodyDataObj: ParsedBodyData = {};

  if (body) {
    body.forEach((value, key) => {
      parsedBodyDataObj[key] = decodeURIComponent(value);
    });
  }

  return parsedBodyDataObj;
};

/**
 * Extracts timestamp from query params or body data, defaults to current time
 */
const extractTimestamp = (queryParams: QueryParams, bodyData: ParsedBodyData): number => {
  const tsString = queryParams.ts || bodyData.ts;
  return tsString ? parseInt(tsString, 10) : Date.now();
};

/**
 * Parses a Lytics API request URL and body to extract event information
 *
 * @param url - The full URL of the request
 * @param body - The request body as a string or object
 * @param type - The type of Lytics request being made
 * @returns EventModel containing parsed request information
 */
const parseLyticsRequest = (
  url: string,
  body: string | Record<string, unknown>,
  type: LyticsRequestType,
): EventModel => {
  // Parse URL
  const parsedURL = new URL(url);
  const parsedBody = body ? new URLSearchParams(body as string) : null;

  // Extract URL components
  const protocol = parsedURL.protocol;
  const host = parsedURL.host;
  const pathname = parsedURL.pathname;
  const search = parsedURL.search;

  // Parse query parameters and body data
  const queryParamObj = parseQueryParameters(search);
  const parsedBodyDataObj = parseBodyData(parsedBody);

  // Extract timestamp
  const ts = extractTimestamp(queryParamObj, parsedBodyDataObj);

  // Get description for this request type
  const description = getRequestDescription(type);

  return {
    protocol,
    host,
    pathname,
    queryParamObj,
    parsedBodyDataObj,
    ts,
    type,
    description,
  };
};

// --------------------------------------------------------
// Network Traffic Handler
// --------------------------------------------------------

/**
 * Handles initialization of domain state for a new domain
 */
const initializeDomainState = async (activeDomain: string, tabId: string): Promise<void> => {
  await domainStateStore.setDomainState(activeDomain, {
    isPinned: false,
    tagActivity: [],
    activeTabIds: [tabId],
  });
  EmitLog({
    name: 'background',
    payload: { msg: `Initialized domain state for ${activeDomain}` },
  });
};

/**
 * Checks if request should be processed based on pinned/sticky domain rules
 *
 * CRITICAL: Only tracks events for domains that have been analyzed (pinned).
 * This prevents automatic tracking of all domains and ensures user consent.
 */
const shouldProcessRequest = (activeDomain: string, stickyDomain: string, domainState: any): boolean => {
  // FIRST: Only process requests from pinned domains (user must "Configure/analyze/Pin Domain")
  // This ensures we don't track domains that haven't been explicitly analyzed
  if (!domainState?.isPinned) {
    EmitLog({
      name: 'background',
      payload: {
        msg: `Domain not pinned - skipping event tracking`,
        domain: activeDomain,
      },
    });
    return false;
  }

  return true;
};

/**
 * Parses network request to determine Lytics request type and extract data
 */
const parseNetworkRequest = (url: string, details: NetworkRequestDetails): EventModel | null => {
  const tabId = details.tabId?.toString();
  let postData: string | undefined;
  let result: EventModel | null = null;

  switch (true) {
    case url.includes('/api/tag/'):
      EmitLog({ name: 'background', payload: { msg: 'Called Core Tag', url: url, tabId } });
      result = parseLyticsRequest(url, {}, 'load-js-tag');
      break;

    case url.includes('/api/personalize/'):
      EmitLog({ name: 'background', payload: { msg: 'Called Entity API', url: url, tabId } });
      result = parseLyticsRequest(url, {}, 'load-profile');
      break;

    case url.includes('/c/'):
      EmitLog({ name: 'background', payload: { msg: 'Collection API', url: url, tabId } });
      if (details.requestBody) {
        postData = details?.requestBody?.formData?._js?.[0];
      }
      result = parseLyticsRequest(url, postData || {}, 'collect-data');
      break;

    case url.includes('/static/pathfora.min.js'):
      EmitLog({ name: 'background', payload: { msg: 'Called Pathfora Tag', url: url, tabId } });
      result = parseLyticsRequest(url, {}, 'load-pathfora-tag');
      break;

    case url.includes('static/pathfora.min.css'):
      EmitLog({ name: 'background', payload: { msg: 'Called Pathfora Styles', url: url, tabId } });
      result = parseLyticsRequest(url, {}, 'load-pathfora-css');
      break;

    case url.includes('/experience/candidate'):
      EmitLog({ name: 'background', payload: { msg: 'Called Experience Config API', url: url, tabId } });
      result = parseLyticsRequest(url, {}, 'load-experience-config');
      break;

    case url.includes('/api/program/campaign/config'):
      EmitLog({ name: 'background', payload: { msg: 'Called Legacy Campaign Config API', url: url, tabId } });
      result = parseLyticsRequest(url, {}, 'load-campaign-config');
      break;

    default:
      EmitLog({ name: 'background', payload: { msg: 'Unhandled API Request', url: url, tabId } });
  }

  return result;
};

/**
 * Stores the parsed event in both per-domain and global storage
 */
const storeEvent = async (activeDomain: string, result: EventModel, tabId: string): Promise<void> => {
  // Add event to per-domain storage (shared across all tabs on this domain)
  await domainStateStore.addEvent(activeDomain, result);
  EmitLog({
    name: 'background',
    payload: { msg: `Event added to domain ${activeDomain}`, type: result.type, tabId },
  });

  // Also add to global storage for backwards compatibility (can be removed later)
  tagActivityStore.add(JSON.stringify(result));
};

/**
 * Creates a network traffic handler with access to sticky domain state
 *
 * @param dependencies - Dependencies needed by the handler
 * @returns Network traffic handler function
 */
export const createNetworkTrafficHandler = (dependencies: NetworkTrafficHandlerDependencies) => {
  return (details: NetworkRequestDetails): void => {
    // Handle async operations in a separate function to avoid blocking
    (async () => {
      try {
        // Get the tab ID that generated the request
        const tabId = details.tabId?.toString();
        if (!tabId) {
          EmitLog({ name: 'background', payload: { msg: 'No tab ID in request' } });
          return;
        }

        // Get the active tab url that generated the request
        const activeTabUrl = details.initiator;
        if (!activeTabUrl) {
          return;
        }

        // Parse the active tab url to get domain
        const activeDomain = new URL(activeTabUrl).hostname;

        // Register this tab as viewing this domain
        await domainStateStore.registerTab(activeDomain, tabId);

        // Get the current domain state
        let domainState = await domainStateStore.getDomainState(activeDomain);

        // If domain has no state yet, initialize it
        if (!domainState) {
          await initializeDomainState(activeDomain, tabId);
          // Refetch the state after initialization to ensure we have the latest data
          domainState = await domainStateStore.getDomainState(activeDomain);
        }

        // Get current sticky domain
        const stickyDomain = dependencies.getStickyDomain();

        // Check if request should be processed based on pinned/sticky rules
        // NOTE: This will return false for unpinned domains - only pinned domains are tracked
        if (!shouldProcessRequest(activeDomain, stickyDomain, domainState)) {
          return;
        }

        // Parse the network request to extract event data
        const result = parseNetworkRequest(details.url, details);

        // Store the event if parsing was successful
        if (result) {
          await storeEvent(activeDomain, result, tabId);
        }
      } catch (error) {
        EmitLog({
          name: 'background',
          payload: { msg: 'Error in handleNetworkTraffic', error: (error as Error).message, url: details?.url },
        });
      }
    })();
  };
};
