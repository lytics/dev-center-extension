export interface TagConfigPathforaCandidates {
  experiences?: any[];
  variations?: any[];
  legacyABTests?: any[];
}
export interface TagConfigModel {
  src?: string;
  cid?: string[];
  stream?: string;
  audit?: {
    topic?: string;
    level?: string;
  };
  cookies?: {
    dataLayerPull?: {
      customCookieKeys?: string[];
      disabled?: boolean;
    };
    domain?: string;
  };
  entity?: {
    preload?: boolean;
    format?: string;
    table?: string;
    byFieldKey?: string;
    byFieldValue?: string;
  };
  pageAnalysis?: {
    dataLayerPull?: {
      disabled?: boolean;
    };
    performPageAnalysis?: boolean;
  };
  pathfora?: {
    install?: {
      disabled?: boolean;
      sdk?: {
        disabled?: boolean;
        loaded?: boolean;
        lazy?: boolean;
        src?: string;
      };
      css?: {
        disabled?: boolean;
        loaded?: boolean;
      };
      global?: string;
    };
    preview?: {
      disabled?: boolean;
      polling?: {
        retries?: number;
      };
      variation?: {
        src?: string;
        previewKey?: string;
      };
      experience?: {
        src?: string;
        previewKey?: string;
      };
      global?: string;
    };
    publish?: {
      disabled?: boolean;
      legacy?: {
        disabled?: boolean;
        src?: string;
        loaded?: boolean;
      };
      urlFragmentWhitelist?: string[];
      src?: string;
      polling?: {
        retries?: number;
      };
      global?: string;
      loaded?: boolean;
      priority?: string;
      recommendations?: {
        experience?: any[];
      };
      candidates?: TagConfigPathforaCandidates;
      useLegacy?: boolean;
    };
  };
  poll?: {
    retries?: number;
    interval?: number;
  };
  segments?: {
    disabled?: boolean;
    storageKey?: string;
    defaultSegments?: string[];
  };
  send?: {
    pageViewOnFirst?: boolean;
  };
  url?: string;
  location?: string;
  loadid?: boolean;
  delay?: number;
  blocked?: boolean;
  path?: string;
  idpath?: string;
  cookie?: string;
  sesname?: string;
  sessecs?: number;
  qsargs?: string[];
  ref?: boolean;
  tagid?: string;
  version?: string;
}
