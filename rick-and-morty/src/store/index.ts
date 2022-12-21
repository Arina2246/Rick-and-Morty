import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
