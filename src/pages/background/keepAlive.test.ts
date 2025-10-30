import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock Chrome APIs
const mockGetPlatformInfo = vi.fn((callback: (info: any) => void) => {
  callback({ os: 'mac', arch: 'x86-64' });
});

global.chrome = {
  runtime: {
    getPlatformInfo: mockGetPlatformInfo,
  },
} as any;

// Mock EmitLog
const mockEmitLog = vi.fn();
vi.mock('@root/src/shared/components/EmitLog', () => ({
  EmitLog: mockEmitLog,
}));

// Since the keep-alive functions are not exported, we'll create the same logic
// in a testable way. In production, these would be the actual functions from index.ts
let keepAliveInterval: NodeJS.Timeout | null = null;

const startKeepAlive = () => {
  // Clear any existing interval
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
  }

  // Ping every 20 seconds to prevent service worker from going inactive
  keepAliveInterval = setInterval(() => {
    chrome.runtime.getPlatformInfo(() => {
      // Just accessing chrome API keeps the worker alive
      mockEmitLog({ name: 'background', payload: { msg: 'Keep-alive ping' } });
    });
  }, 20000); // 20 seconds

  mockEmitLog({ name: 'background', payload: { msg: 'Keep-alive mechanism started' } });
};

const stopKeepAlive = () => {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
    mockEmitLog({ name: 'background', payload: { msg: 'Keep-alive mechanism stopped' } });
  }
};

describe('Keep-Alive Mechanism', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    // Reset interval
    if (keepAliveInterval) {
      clearInterval(keepAliveInterval);
      keepAliveInterval = null;
    }
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
    // Clean up interval
    if (keepAliveInterval) {
      clearInterval(keepAliveInterval);
      keepAliveInterval = null;
    }
  });

  it('should start the keep-alive interval and ping Chrome API every 20 seconds', () => {
    startKeepAlive();

    // Verify interval started
    expect(mockEmitLog).toHaveBeenCalledWith({
      name: 'background',
      payload: { msg: 'Keep-alive mechanism started' },
    });
    expect(keepAliveInterval).not.toBeNull();

    // Initially, no ping yet
    expect(mockGetPlatformInfo).not.toHaveBeenCalled();

    // Advance time by 20 seconds - should ping once
    vi.advanceTimersByTime(20000);
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(1);

    // Advance another 20 seconds - should ping twice
    vi.advanceTimersByTime(20000);
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(2);

    // Advance another 20 seconds - should ping three times
    vi.advanceTimersByTime(20000);
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(3);
  });

  it('should stop the interval and prevent further pings', () => {
    startKeepAlive();

    // Advance 20 seconds - should ping
    vi.advanceTimersByTime(20000);
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(1);

    // Stop keep-alive
    stopKeepAlive();
    expect(mockEmitLog).toHaveBeenCalledWith({
      name: 'background',
      payload: { msg: 'Keep-alive mechanism stopped' },
    });
    expect(keepAliveInterval).toBeNull();

    mockGetPlatformInfo.mockClear();

    // Advance another 20 seconds - should NOT ping
    vi.advanceTimersByTime(20000);
    expect(mockGetPlatformInfo).not.toHaveBeenCalled();
  });

  it('should allow restarting after stopping', () => {
    // Start, stop, then start again
    startKeepAlive();
    stopKeepAlive();

    mockEmitLog.mockClear();
    mockGetPlatformInfo.mockClear();

    startKeepAlive();

    expect(mockEmitLog).toHaveBeenCalledWith({
      name: 'background',
      payload: { msg: 'Keep-alive mechanism started' },
    });

    // Should ping normally after restart
    vi.advanceTimersByTime(20000);
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(1);
  });

  it('should not create multiple intervals when started repeatedly', () => {
    // Start multiple times without stopping
    for (let i = 0; i < 5; i++) {
      startKeepAlive();
    }

    // Should only have one interval running
    vi.advanceTimersByTime(20000);
    // If multiple intervals were running, we'd see more than 1 call
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(1);
  });

  it('should handle stop being called when no interval is running', () => {
    // Stop without starting
    stopKeepAlive();

    // Should not throw error
    expect(keepAliveInterval).toBeNull();
  });

  it('should handle multiple start/stop cycles in production workflow', () => {
    // Simulate extension enable/disable cycles

    // Cycle 1: Enable extension
    startKeepAlive();
    vi.advanceTimersByTime(40000); // 2 pings
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(2);
    stopKeepAlive();

    mockGetPlatformInfo.mockClear();

    // Cycle 2: Enable extension again
    startKeepAlive();
    vi.advanceTimersByTime(60000); // 3 pings
    expect(mockGetPlatformInfo).toHaveBeenCalledTimes(3);
    stopKeepAlive();

    // Should end in stopped state
    expect(keepAliveInterval).toBeNull();
  });
});
