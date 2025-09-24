/**
 * Shared constants for auto-detection functionality
 * Using hardcoded values for now (can be moved to config file later)
 */

// Detection confidence thresholds
export const DETECTION_THRESHOLDS = {
  HIGH_CONFIDENCE: 0.8,
  MEDIUM_CONFIDENCE: 0.5,
  LOW_CONFIDENCE: 0.2,
} as const;

// Detection intervals (in milliseconds)
export const DETECTION_INTERVALS = {
  BASE_INTERVAL: 3000, // 3 seconds
  MAX_RETRIES: 10,
  CLEANUP_INTERVAL: 24 * 60 * 60 * 1000, // 24 hours
  DEBOUNCE_DELAY: 1000, // 1 second
} as const;

// Lytics URL patterns for detection
export const LYTICS_URL_PATTERNS = {
  CORE_DOMAIN: 'lytics.io',
  API_TAG: '/api/tag/',
  API_PERSONALIZE: '/api/personalize/',
  DATA_COLLECTION: '/c/',
  PATHFORA_SCRIPT: '/static/pathfora.min.js',
  PATHFORA_CSS: 'static/pathfora.min.css',
  EXPERIENCE_CANDIDATE: '/experience/candidate',
  CAMPAIGN_CONFIG: '/api/program/campaign/config',
  PATHFORA: 'pathfora',
} as const;

// Confidence boost values for different request types
export const CONFIDENCE_BOOSTS = {
  JS_TAG_LOADING: 0.9, // Very high confidence
  PROFILE_API: 0.7, // High confidence
  PATHFORA_TAG: 0.6, // High confidence
  DATA_COLLECTION: 0.5, // Medium-high confidence
  EXPERIENCE_CONFIG: 0.4, // Medium confidence
  CAMPAIGN_CONFIG: 0.3, // Medium confidence
  CSS_ONLY: 0.2, // Low confidence
  GENERIC_LYTICS: 0.1, // Very low confidence
} as const;

// Data layer variables to check for
export const DATA_LAYER_VARIABLES = ['dataLayer', '_ly', 'lyticsUID', 'pathfora'] as const;

// Domains to skip monitoring (performance optimization)
export const SKIP_MONITORING_DOMAINS = [
  'google.com',
  'googleapis.com',
  'gstatic.com',
  'facebook.com',
  'fbcdn.net',
  'youtube.com',
  'ytimg.com',
  'amazon.com',
  'amazonaws.com',
  'microsoft.com',
  'live.com',
  'apple.com',
  'icloud.com',
  'twitter.com',
  'twimg.com',
  'linkedin.com',
  'licdn.com',
] as const;

// Detection result types
export const DETECTION_TYPES = {
  JSTAG_FOUND: 'jstag-found',
  JSTAG_NOT_FOUND: 'jstag-not-found',
  SCRIPTS_DETECTED: 'scripts-detected',
} as const;

// Confidence levels
export const CONFIDENCE_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;
