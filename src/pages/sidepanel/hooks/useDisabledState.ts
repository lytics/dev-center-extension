import { useCallback } from 'react';

interface UseDisabledStateOptions {
  documentationUrl?: string;
}

export const useDisabledState = (options: UseDisabledStateOptions = {}) => {
  const { documentationUrl = 'https://docs.lytics.com/docs/lytics-javascript-tag#installation' } = options;

  const handleDocClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      chrome.tabs.create({ url: documentationUrl });
    },
    [documentationUrl],
  );

  return {
    documentationUrl,
    handleDocClick,
  };
};
