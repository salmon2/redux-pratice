import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserInfo } from './dataSlice';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sampleapis.com' }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfo, number>({
      query: (id) => {
        console.log('id', id);
        return 'userInfo';
      },
    }),
    updateSecondData: builder.mutation<void, number>({
      query: (secondData) => ({
        url: 'secondData',
        method: 'POST',
        body: { secondData },
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useUpdateSecondDataMutation, useLazyGetUserInfoQuery } = dataApi;
