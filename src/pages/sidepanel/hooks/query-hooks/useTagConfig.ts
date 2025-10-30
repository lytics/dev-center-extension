import { useQuery } from '@tanstack/react-query';

import { messageBroker } from '../../../../shared/message-broker';
import { IMessage } from '../../../../shared/message-broker/types';
import { TagConfigModel } from '../../../../shared/models/tagConfigModel';
import { useCurrentTab } from '../useCurrentTab';

const getMessageRequest = (
  tabId: number,
): IMessage<{
  currentTabId: number;
}> => ({
  key: 'GET_CONFIG',
  payload: {
    currentTabId: tabId,
  },
});

const getTagConfig = async (currentTabId: number): Promise<TagConfigModel> => {
  return await messageBroker.send(getMessageRequest(currentTabId));
};

export const useTagConfig = () => {
  const currentTab = useCurrentTab();

  return useQuery<TagConfigModel>({
    queryKey: ['tagConfig', currentTab?.url, currentTab?.id],
    queryFn: () => getTagConfig(currentTab.id),
    enabled: !!currentTab?.id,
  });
};
