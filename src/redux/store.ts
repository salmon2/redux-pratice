import { configureStore } from '@reduxjs/toolkit';
import dataSlice, { DataInterface } from './dataSlice';
import { dataApi } from './dataApi';
export interface DataState {
  data: DataInterface;
}

export const dataStore = configureStore({
  reducer: {
    data: dataSlice,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
