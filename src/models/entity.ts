export interface Identity {
  data: any;
  // entity is just a map[string]object
  entity: any;
  fragments: Fragment[];
}

export interface Fragment {
  conflict: boolean;
  conflicts_with?: string;
  keys: FragmentKey[];
  // unimplemented: modified, neighbor_limit, neighbors, streams
}

export interface FragmentKey {
  key: string;
  value: string;
}

export interface ApiResponse {
  data: any;
  error: string;
  requestId: string;
}

export interface ContentEntity {
  created?: string;
  fetched?: string;
  updated?: string;
  description?: string;
  longDescription?: string;
  httpstatus?: string;
  language?: string;
  primaryImage?: string;
  url?: string;
  collections?: string[];
  // topics are a map[string]number
  topics?: Record<string, number>;
}

export const ExtractSortedMap = (m: { [key: string]: number }): { label: string; value: number }[] => {
  const filteredArray = Object.entries(m)
    .filter(([key, value]) => key.length > 1 && value > 0)
    .map(([key, value]) => ({ label: key, value }));

  // Sort the filtered array based on numeric values in decreasing order
  const sortedArray = filteredArray.sort((a, b) => b.value - a.value);

  // Slice the array to get at most 20 elements
  return sortedArray.slice(0, 20);
};

const appendScore = (scoresArray, data, propertyName, label) => {
  const propertyValue = data?.[propertyName];

  if (propertyValue) {
    return [
      ...scoresArray,
      {
        label: label,
        value: propertyValue / 100,
      },
    ];
  }

  return scoresArray;
};

const extractScores = (data: any, scoreNames: [string, string][]) => {
  let updatedScores = [];
  for (const [propertyName, label] of scoreNames) {
    updatedScores = appendScore(updatedScores, data, propertyName, label);
  }
  return updatedScores;
};

export const ExtractScores = (data: any) => {
  return extractScores(data, [
    ['score_consistency', 'Consistency'],
    ['score_frequency', 'Frequency'],
    ['score_intensity', 'Intensity'],
    ['score_maturity', 'Maturity'],
    ['score_momentum', 'Momentum'],
    ['score_propensity', 'Propensity'],
    ['score_quantity', 'Quantity'],
    ['score_recency', 'Recency'],
    ['score_volatility', 'Volatility'],
  ]);
};

export const ExtractSegments = (data: any, field: string) => {
  const segmentsArray = data[field];
  return segmentsArray.reduce((result, segment) => {
    result[segment] = segment;
    return result;
  }, {});
};
