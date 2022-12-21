import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  cardDataType,
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
        throw new Error('Error');
      }
      const data = await response.json();
      dispatch(addCads(data.results));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState: initialStoreType = {
  cards: [],
  status: null,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addCads(state, action: PayloadAction<cardDataType[]>) {
      state.cards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

const { addCads } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
