import { EmitLog } from '@src/shared/components/EmitLog';

export const isJstagAvailable = (): boolean => {
  return typeof (window as any).jstag !== 'undefined' && (window as any).jstag !== null;
};

export const pollForJstag = (domain: string): void => {
  let retryCount = 0;
  const maxRetries = 5;
  const retryInterval = 750;

  const checkForJstag = async () => {
    retryCount++;

    if (isJstagAvailable()) {
      EmitLog({ name: 'content', payload: { msg: 'Lytics jstag detected during auto-detection' } });
      await notifyAutoDetectionSuccess(domain);
      return;
    }

    if (retryCount < maxRetries) {
      EmitLog({ name: 'content', payload: { msg: `Auto-detection retry ${retryCount}/${maxRetries}` } });
      setTimeout(checkForJstag, retryInterval);
    } else {
      EmitLog({ name: 'content', payload: { msg: 'Auto-detection failed - no jstag found after max retries' } });
      await notifyAutoDetectionFailed(domain);
    }
  };

  checkForJstag();
};

export const startAutoDetection = async (domain: string): Promise<void> => {
  EmitLog({ name: 'content', payload: { msg: `Starting auto-detection for domain: ${domain}` } });

  if (isJstagAvailable()) {
    EmitLog({ name: 'content', payload: { msg: 'Lytics jstag found immediately' } });
    await notifyAutoDetectionSuccess(domain);
    return;
  }

  pollForJstag(domain);
};

export const notifyAutoDetectionSuccess = async (domain: string): Promise<void> => {
  try {
    await chrome.runtime.sendMessage({
      action: 'recordDetection',
      domain: domain,
      confidence: 0.9,
    });
    EmitLog({ name: 'content', payload: { msg: `Notified background of successful detection for: ${domain}` } });
  } catch (error) {
    EmitLog({
      name: 'content',
      payload: { msg: 'Error notifying background of successful detection', error: error.message },
    });
  }
};

export const notifyAutoDetectionFailed = async (domain: string): Promise<void> => {
  try {
    await chrome.runtime.sendMessage({
      action: 'autoDetectionFailed',
      domain: domain,
      retryCount: 0,
    });
    EmitLog({ name: 'content', payload: { msg: `Notified background of failed detection for: ${domain}` } });
  } catch (error) {
    EmitLog({
      name: 'content',
      payload: { msg: 'Error notifying background of failed detection', error: error.message },
    });
  }
};
