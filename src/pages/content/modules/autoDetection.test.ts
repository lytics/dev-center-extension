import { beforeEach, describe, expect, it, vi } from 'vitest';

import { EmitLog } from '@src/shared/components/EmitLog';

import {
  isJstagAvailable,
  notifyAutoDetectionFailed,
  notifyAutoDetectionSuccess,
  pollForJstag,
  startAutoDetection,
} from './autoDetection';

vi.mock('@src/shared/components/EmitLog');

describe('autoDetection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
    delete (window as any).jstag;
    global.chrome = {
      runtime: {
        sendMessage: vi.fn().mockResolvedValue({}),
      },
      storage: {
        local: {
          get: vi.fn().mockResolvedValue({ extensionState: true }),
          set: vi.fn().mockResolvedValue(undefined),
        },
      },
    } as any;
  });

  describe('isJstagAvailable', () => {
    it('should return true when jstag is defined', () => {
      (window as any).jstag = {};
      expect(isJstagAvailable()).toBe(true);
    });

    it('should return false when jstag is undefined', () => {
      delete (window as any).jstag;
      expect(isJstagAvailable()).toBe(false);
    });

    it('should return false when jstag is null', () => {
      (window as any).jstag = null;
      expect(isJstagAvailable()).toBe(false);
    });
  });

  describe('notifyAutoDetectionSuccess', () => {
    it('should send message to background with correct payload', async () => {
      const domain = 'example.com';
      await notifyAutoDetectionSuccess(domain);

      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: domain,
        confidence: 0.9,
      });
      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: `Notified background of successful detection for: ${domain}` },
      });
    });

    it('should handle sendMessage error gracefully', async () => {
      const domain = 'example.com';
      const error = new Error('Send failed');
      (chrome.runtime.sendMessage as any).mockRejectedValue(error);

      await notifyAutoDetectionSuccess(domain);

      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: 'Error notifying background of successful detection', error: error.message },
      });
    });
  });

  describe('notifyAutoDetectionFailed', () => {
    it('should send failure message to background', async () => {
      const domain = 'example.com';
      await notifyAutoDetectionFailed(domain);

      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'autoDetectionFailed',
        domain: domain,
        retryCount: 0,
      });
      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: `Notified background of failed detection for: ${domain}` },
      });
    });

    it('should handle sendMessage error gracefully', async () => {
      const domain = 'example.com';
      const error = new Error('Send failed');
      (chrome.runtime.sendMessage as any).mockRejectedValue(error);

      await notifyAutoDetectionFailed(domain);

      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: 'Error notifying background of failed detection', error: error.message },
      });
    });
  });

  describe('pollForJstag', () => {
    it('should detect jstag on first check', async () => {
      const domain = 'example.com';
      (window as any).jstag = {};

      pollForJstag(domain);

      await vi.runAllTimersAsync();

      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: domain,
        confidence: 0.9,
      });
    });

    it('should retry and eventually find jstag', async () => {
      const domain = 'example.com';

      pollForJstag(domain);

      await vi.advanceTimersByTimeAsync(750);
      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: 'Auto-detection retry 1/5' },
      });

      (window as any).jstag = {};
      await vi.advanceTimersByTimeAsync(750);

      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: domain,
        confidence: 0.9,
      });
    });

    it('should fail after max retries', async () => {
      const domain = 'example.com';

      pollForJstag(domain);

      for (let i = 0; i < 5; i++) {
        await vi.advanceTimersByTimeAsync(750);
      }

      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: 'Auto-detection failed - no jstag found after max retries' },
      });
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'autoDetectionFailed',
        domain: domain,
        retryCount: 0,
      });
    });
  });

  describe('startAutoDetection', () => {
    it('should detect jstag immediately if available', async () => {
      const domain = 'example.com';
      (window as any).jstag = {};

      await startAutoDetection(domain);

      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: 'Lytics jstag found immediately' },
      });
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: domain,
        confidence: 0.9,
      });
    });

    it('should start polling if jstag not immediately available', async () => {
      const domain = 'example.com';

      await startAutoDetection(domain);

      expect(EmitLog).toHaveBeenCalledWith({
        name: 'content',
        payload: { msg: `Starting auto-detection for domain: ${domain}` },
      });

      (window as any).jstag = {};
      await vi.runAllTimersAsync();

      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
        action: 'recordDetection',
        domain: domain,
        confidence: 0.9,
      });
    });
  });
});
