export type cardDataType = {
  name: string;
  id: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: string;
  url: string;
  created: string;
};

export type pageDataType = {
  count: null | number;
  next: null | string;
  pages: null | number;
  prev: null | number;
};

export type paramsFetchDataType = {
  name: string;
  page: number;
};

export type initialStoreType = {
  text: string;
  status: string | null;
  error: string | null;
  cards: [] | cardDataType[];
  pageData: pageDataType;
};
