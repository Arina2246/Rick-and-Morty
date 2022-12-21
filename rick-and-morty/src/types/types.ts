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

export type paramsFetchDataType = {
  name: string;
  page: number;
};

export type initialStoreType = {
  status: string | null;
  error: string | null;
  cards: [] | cardDataType[];
};
