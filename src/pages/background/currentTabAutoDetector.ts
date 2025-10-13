import { EmitLog } from '@root/src/shared/components/EmitLog';

/**
 * Domain Detection Information Structure
 *
 * Tracks the detection state and metadata for each domain that has been
 * checked for Lytics integration. This information is used to:
 * - Avoid re-detecting domains that have already been checked
 * - Implement parent domain inheritance for subdomains
 * - Clean up old detection data
 * - Display detection results in the UI with confidence scores
 */
export interface DomainDetectionInfo {
  domain: string; // The domain that was checked
  detected: boolean; // Whether Lytics jstag was found
  confidence: number; // Confidence score (0.0 to 1.0)
  timestamp: number; // When detection was first performed
  lastSeen: number; // When domain was last accessed
  subdomains: string[]; // Subdomains that inherit this detection
}

/**
 * Current Tab Auto-Detector
 *
 * Manages automatic detection of Lytics JavaScript tags across browser tabs.
 * This class coordinates between tab events and content script detection,
 * maintaining a cache of detection results to optimize performance.
 *
 * Key Responsibilities:
 * - Monitor tab activation and navigation events
 * - Coordinate with content scripts for jstag detection
 * - Cache detection results to avoid redundant checks
 * - Implement parent domain inheritance
 * - Clean up old detection data
 *
 * Detection Strategy:
 * - Immediate detection for known domains (from cache)
 * - Fresh detection for unknown domains via content script
 * - Parent domain inheritance (api.example.com inherits from example.com)
 * - Time-based cache expiration (30 days default)
 */
export class CurrentTabAutoDetector {
  private currentTabId: number | null = null;
  private currentDomain: string | null = null;
  private detectedDomains: Map<string, DomainDetectionInfo> = new Map();
  private maxDomains = 100;
  private maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days

  constructor() {
    this.loadStoredDomains();
  }

  /**
   * Handles browser tab activation events.
   *
   * When a user switches to a different tab, this method:
   * 1. Updates the current tab tracking
   * 2. Extracts the domain from the tab's URL
   * 3. Initiates detection for the new domain if needed
   *
   * This ensures that detection follows the user's browsing context
   * and only runs on the currently active tab.
   *
   * @param activeInfo - Chrome tab activation information
   */
  async onTabActivated(activeInfo: chrome.tabs.TabActiveInfo): Promise<void> {
    if (!chrome.tabs || !chrome.tabs.get) {
      EmitLog({ name: 'current-tab-detector', payload: { msg: 'Chrome tabs API not available' } });
      return;
    }

    this.currentTabId = activeInfo.tabId;

    try {
      const tab = await chrome.tabs.get(activeInfo.tabId);
      if (tab.url) {
        await this.handleDomainChange(tab.url);
      }
    } catch (error) {
      EmitLog({ name: 'current-tab-detector', payload: { msg: 'Error getting tab info', error: error.message } });
    }
  }

  /**
   * Handle tab updates - detect domain changes within same tab
   */
  async onTabUpdated(tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab): Promise<void> {
    if (changeInfo.status === 'complete' && tabId === this.currentTabId && tab.url) {
      await this.handleDomainChange(tab.url);
    }
  }

  /**
   * Handle domain changes in current tab
   */
  private async handleDomainChange(url: string): Promise<void> {
    const newDomain = this.extractDomain(url);

    if (!newDomain) {
      return;
    }

    if (newDomain !== this.currentDomain) {
      this.currentDomain = newDomain;
      EmitLog({ name: 'current-tab-detector', payload: { msg: `Domain changed to: ${newDomain}` } });

      if (this.shouldDetectDomain(newDomain)) {
        await this.startDetectionForDomain(newDomain);
      } else {
        await this.showCachedResults(newDomain);
      }
    }
  }

  /**
   * Determines whether a domain should be checked for Lytics integration.
   *
   * This method implements intelligent caching to avoid redundant detection:
   * 1. Check if domain has been detected recently (within maxAge)
   * 2. If not found, check if parent domain has been detected
   * 3. Only perform fresh detection if no valid cached results exist
   *
   * Parent Domain Inheritance:
   * - api.example.com inherits detection from example.com
   * - shop.example.com inherits detection from example.com
   * - Reduces redundant checks across related subdomains
   *
   * @param domain - The domain to check
   * @returns true if detection should be performed, false if cached result exists
   */
  private shouldDetectDomain(domain: string): boolean {
    // Check exact domain match
    const exactMatch = this.detectedDomains.get(domain);
    if (exactMatch && this.isDetectionValid(exactMatch)) {
      return false; // Already detected and still valid
    }

    // Check parent domain inheritance
    const parentDomain = this.getParentDomain(domain);
    if (parentDomain) {
      const parentInfo = this.detectedDomains.get(parentDomain);
      if (parentInfo && this.isDetectionValid(parentInfo)) {
        return false; // Parent domain detected, inherit
      }
    }

    return true; // New domain or expired detection
  }

  /**
   * Start detection for a domain
   */
  private async startDetectionForDomain(domain: string): Promise<void> {
    if (!this.currentTabId) {
      return;
    }

    EmitLog({ name: 'current-tab-detector', payload: { msg: `Starting detection for: ${domain}` } });

    try {
      if (!chrome.tabs || !chrome.tabs.sendMessage) {
        EmitLog({ name: 'current-tab-detector', payload: { msg: 'Chrome tabs API not available for messaging' } });
        return;
      }

      // Send message to content script to start detection
      await chrome.tabs.sendMessage(this.currentTabId, {
        action: 'startAutoDetection',
        domain: domain,
      });
    } catch (error) {
      EmitLog({ name: 'current-tab-detector', payload: { msg: 'Error starting detection', error: error.message } });
    }
  }

  /**
   * Show cached results for already detected domain
   */
  private async showCachedResults(domain: string): Promise<void> {
    EmitLog({ name: 'current-tab-detector', payload: { msg: `Showing cached results for: ${domain}` } });

    // Update last seen timestamp
    const domainInfo = this.detectedDomains.get(domain);
    if (domainInfo) {
      domainInfo.lastSeen = Date.now();
      await this.saveStoredDomains();
    }
  }

  /**
   * Records a successful Lytics detection for a domain.
   *
   * This method updates the detection cache with the new result and:
   * 1. Creates or updates the domain's detection info
   * 2. Updates parent domain relationships
   * 3. Saves to persistent storage
   * 4. Triggers cleanup of old domains
   *
   * Parent Domain Updates:
   * When a subdomain is detected, it's added to the parent domain's
   * subdomain list, enabling inheritance for future checks.
   *
   * @param domain - The domain where Lytics was detected
   * @param confidence - Confidence score of the detection (0.0 to 1.0)
   */
  async recordDetection(domain: string, confidence: number = 0.8): Promise<void> {
    const now = Date.now();

    this.detectedDomains.set(domain, {
      domain,
      detected: true,
      confidence,
      timestamp: now,
      lastSeen: now,
      subdomains: [],
    });

    // Update parent domain if this is a subdomain
    const parentDomain = this.getParentDomain(domain);
    if (parentDomain) {
      const parentInfo = this.detectedDomains.get(parentDomain);
      if (parentInfo) {
        if (!parentInfo.subdomains.includes(domain)) {
          parentInfo.subdomains.push(domain);
        }
      }
    }

    await this.saveStoredDomains();
    await this.cleanupOldDomains();

    EmitLog({ name: 'current-tab-detector', payload: { msg: `Recorded detection for: ${domain}`, confidence } });
  }

  /**
   * Clear all detections and re-detect current domain
   */
  async clearCacheAndRedetect(): Promise<void> {
    this.detectedDomains.clear();
    await this.saveStoredDomains();

    if (this.currentTabId && this.currentDomain) {
      EmitLog({ name: 'current-tab-detector', payload: { msg: 'Cleared cache, re-detecting current domain' } });
      await this.startDetectionForDomain(this.currentDomain);
    }
  }

  /**
   * Extract domain from URL
   */
  private extractDomain(url: string): string | null {
    try {
      return new URL(url).hostname;
    } catch {
      return null;
    }
  }

  /**
   * Get parent domain - optimized version
   */
  private getParentDomain(domain: string): string | null {
    const parts = domain.split('.');

    if (parts.length < 3) return null;
    if (parts.length <= 4) {
      return parts.slice(-2).join('.');
    }
    const maxIterations = Math.min(parts.length - 2, 4);
    for (let i = 1; i <= maxIterations; i++) {
      const potentialParent = parts.slice(-(i + 1)).join('.');
      if (potentialParent.length > 4) return potentialParent;
    }
    return parts.slice(-2).join('.');
  }

  /**
   * Check if detection is still valid
   */
  private isDetectionValid(info: DomainDetectionInfo): boolean {
    const now = Date.now();
    return now - info.timestamp < this.maxAge;
  }

  /**
   * Cleanup old domains
   */
  private async cleanupOldDomains(): Promise<void> {
    const now = Date.now();
    const domainsToRemove: string[] = [];

    for (const [domain, info] of this.detectedDomains) {
      if (now - info.timestamp > this.maxAge) {
        domainsToRemove.push(domain);
      }
    }

    // Remove old domains
    domainsToRemove.forEach(domain => {
      this.detectedDomains.delete(domain);
    });

    // If still over limit, remove oldest
    if (this.detectedDomains.size > this.maxDomains) {
      const sortedDomains = Array.from(this.detectedDomains.entries()).sort(
        ([, a], [, b]) => a.timestamp - b.timestamp,
      );

      const toRemove = sortedDomains.slice(0, this.detectedDomains.size - this.maxDomains);
      toRemove.forEach(([domain]) => {
        this.detectedDomains.delete(domain);
      });
    }

    if (domainsToRemove.length > 0) {
      await this.saveStoredDomains();
      EmitLog({ name: 'current-tab-detector', payload: { msg: `Cleaned up ${domainsToRemove.length} old domains` } });
    }
  }

  /**
   * Load stored domains from chrome storage
   */
  private async loadStoredDomains(): Promise<void> {
    try {
      if (!chrome.storage || !chrome.storage.local) {
        EmitLog({ name: 'current-tab-detector', payload: { msg: 'Chrome storage API not available' } });
        return;
      }

      const result = await chrome.storage.local.get(['detectedDomains']);
      if (result.detectedDomains) {
        this.detectedDomains = new Map(Object.entries(result.detectedDomains));
        EmitLog({
          name: 'current-tab-detector',
          payload: { msg: `Loaded ${this.detectedDomains.size} stored domains` },
        });
      }
    } catch (error) {
      EmitLog({ name: 'current-tab-detector', payload: { msg: 'Error loading stored domains', error: error.message } });
    }
  }

  /**
   * Save domains to chrome storage
   */
  private async saveStoredDomains(): Promise<void> {
    try {
      if (!chrome.storage || !chrome.storage.local) {
        EmitLog({ name: 'current-tab-detector', payload: { msg: 'Chrome storage API not available' } });
        return;
      }

      const domainsObject = Object.fromEntries(this.detectedDomains);
      await chrome.storage.local.set({ detectedDomains: domainsObject });
    } catch (error) {
      EmitLog({ name: 'current-tab-detector', payload: { msg: 'Error saving domains', error: error.message } });
    }
  }
}

// Export singleton instance
export const currentTabAutoDetector = new CurrentTabAutoDetector();
