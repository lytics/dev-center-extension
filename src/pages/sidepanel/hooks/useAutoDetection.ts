import { useState, useEffect } from 'react';
import autoDetectedDomainsStore, { AutoDetectedDomain } from '@root/src/shared/storages/autoDetectedDomainsStorage';

interface UseAutoDetectionProps {
  isEnabled: boolean;
  activeURL: string | null;
}

interface UseAutoDetectionReturn {
  currentDomainAutoDetection: AutoDetectedDomain | null;
  isAutoDetected: boolean;
  currentDomain: string | undefined;
}

export const useAutoDetection = ({ isEnabled, activeURL }: UseAutoDetectionProps): UseAutoDetectionReturn => {
  const [currentDomainAutoDetection, setCurrentDomainAutoDetection] = useState<AutoDetectedDomain | null>(null);

  const currentDomain = activeURL ? new URL(activeURL).hostname : undefined;
  const isAutoDetected = currentDomainAutoDetection?.autoEnabled || false;

  // Load auto-detection data when enabled and URL changes
  useEffect(() => {
    if (!isEnabled || !activeURL) {
      setCurrentDomainAutoDetection(null);
      return;
    }

    const loadAutoDetectionData = async () => {
      try {
        const currentDomainName = new URL(activeURL).hostname;
        const domainInfo = await autoDetectedDomainsStore.getDomain(currentDomainName);
        setCurrentDomainAutoDetection(domainInfo);
      } catch (error) {
        console.error('Error loading auto-detection data:', error);
        setCurrentDomainAutoDetection(null);
      }
    };

    loadAutoDetectionData();
  }, [isEnabled, activeURL]);

  // Subscribe to auto-detection changes
  useEffect(() => {
    if (!isEnabled || !activeURL) return;

    const handleAutoDetectionChange = () => {
      const currentDomainName = new URL(activeURL).hostname;
      autoDetectedDomainsStore.getDomain(currentDomainName).then(domainInfo => {
        setCurrentDomainAutoDetection(domainInfo);
      });
    };

    autoDetectedDomainsStore.subscribe(handleAutoDetectionChange);
  }, [isEnabled, activeURL]);

  return {
    currentDomainAutoDetection,
    isAutoDetected,
    currentDomain,
  };
};
