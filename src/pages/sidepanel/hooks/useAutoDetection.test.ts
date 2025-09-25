import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAutoDetection } from './useAutoDetection';

// Mock Chrome APIs
global.chrome = {
  storage: {
    local: {
      get: vi.fn(),
      set: vi.fn(),
      onChanged: {
        addListener: vi.fn(),
        removeListener: vi.fn(),
      },
    },
  },
} as any;

// Mock the auto-detected domains store
vi.mock('@root/src/shared/storages/autoDetectedDomainsStorage', () => ({
  default: {
    getDomain: vi.fn(),
    subscribe: vi.fn(),
  },
}));

import autoDetectedDomainsStore from '@root/src/shared/storages/autoDetectedDomainsStorage';
const mockAutoDetectedDomainsStore = autoDetectedDomainsStore as any;

describe('useAutoDetection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return null when extension is disabled', () => {
    const { result } = renderHook(() =>
      useAutoDetection({
        isEnabled: false,
        activeURL: 'https://example.com',
      }),
    );

    expect(result.current.currentDomainAutoDetection).toBeNull();
    expect(result.current.isAutoDetected).toBe(false);
    expect(result.current.currentDomain).toBe('example.com');
  });

  it('should return null when no active URL', () => {
    const { result } = renderHook(() =>
      useAutoDetection({
        isEnabled: true,
        activeURL: null,
      }),
    );

    expect(result.current.currentDomainAutoDetection).toBeNull();
    expect(result.current.isAutoDetected).toBe(false);
    expect(result.current.currentDomain).toBeUndefined();
  });

  it('should load auto-detection data when enabled with valid URL', async () => {
    const mockDomainInfo = {
      domain: 'example.com',
      firstSeen: Date.now(),
      lastSeen: Date.now(),
      tagRequests: ['/api/tag/'],
      confidence: 0.8,
      autoEnabled: true,
      requestCount: 5,
    };

    mockAutoDetectedDomainsStore.getDomain.mockResolvedValue(mockDomainInfo);

    const { result } = renderHook(() =>
      useAutoDetection({
        isEnabled: true,
        activeURL: 'https://example.com',
      }),
    );

    await act(async () => {
      // Wait for the async effect to complete
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(mockAutoDetectedDomainsStore.getDomain).toHaveBeenCalledWith('example.com');
    expect(result.current.currentDomainAutoDetection).toEqual(mockDomainInfo);
    expect(result.current.isAutoDetected).toBe(true);
    expect(result.current.currentDomain).toBe('example.com');
  });

  it('should handle errors gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    mockAutoDetectedDomainsStore.getDomain.mockRejectedValue(new Error('Storage error'));

    const { result } = renderHook(() =>
      useAutoDetection({
        isEnabled: true,
        activeURL: 'https://example.com',
      }),
    );

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.currentDomainAutoDetection).toBeNull();
    expect(result.current.isAutoDetected).toBe(false);
    expect(consoleSpy).toHaveBeenCalledWith('Error loading auto-detection data:', expect.any(Error));

    consoleSpy.mockRestore();
  });

  it('should subscribe to auto-detection changes', () => {
    renderHook(() =>
      useAutoDetection({
        isEnabled: true,
        activeURL: 'https://example.com',
      }),
    );

    expect(mockAutoDetectedDomainsStore.subscribe).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should not subscribe when disabled', () => {
    renderHook(() =>
      useAutoDetection({
        isEnabled: false,
        activeURL: 'https://example.com',
      }),
    );

    expect(mockAutoDetectedDomainsStore.subscribe).not.toHaveBeenCalled();
  });
});
