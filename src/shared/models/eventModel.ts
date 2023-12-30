export interface EventModel {
  protocol?: string;
  host?: string;
  pathname?: string;
  queryParamObj?: any;
  parsedBodyDataObj?: any;
  type?: string;
  description?: string;
  ts: number;
}

export const EventType = {
  "load-js-tag": "Load JS Tag",
  "load-profile": "Load Profile",
  "collect-data": "Collect Data",
  "load-pathfora-tag": "Load Pathfora Tag",
  "load-pathfora-css": "Load Pathfora CSS",
  "load-campaign-config": "Load Campaign Config",
}
