import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  cardDataType,
  pageDataType,
  paramsFetchDataType,
  initialStoreType,
} from '../types/types';

export const fetchData = createAsyncThunk(
  'todos/fetchTodos',

  async function (params: paramsFetchDataType, { rejectWithValue, dispatch }) {
    const url = `https://rickandmortyapi.com/api/character/?name=${
      params.name
    }&page=${params.page.toString()}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Not found');
      }
      const data = await response.json();
      dispatch(addCads(data.results));
      dispatch(addPage(data.info));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState: initialStoreType = {
  text: '',
  cards: [],
  status: null,
  error: null,
  pageData: {
    count: null,
    next: null,
    pages: null,
    prev: null,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addCads(state, action: PayloadAction<cardDataType[]>) {
      state.cards = action.payload;
    },
    addPage(state, action: PayloadAction<pageDataType>) {
      state.pageData = action.payload;
    },
    addText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
      state.cards = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
      state.cards = [];
      state.pageData = { count: null, next: null, pages: null, prev: null };
    });
  },
});

export const { addCads, addPage, addText } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
