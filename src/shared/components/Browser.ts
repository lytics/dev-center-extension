export const GetActiveTabURL = (details, isURLChange) => {
  if (isURLChange && details.frameId !== 0) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    chrome.tabs.get(details.tabId, tab => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        reject(chrome.runtime.lastError);
      } else {
        resolve(tab.url);
      }
    });
  });
};
