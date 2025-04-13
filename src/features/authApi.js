import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    // login
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login/',
        body: data,
        method: 'POST'
      })
    }),
    register:builder.mutation({
      query:(data)=>({
        url:'/auth/register',
        body:data,
        method:'POST'
      })
    }),
    logout:builder.mutation({
      query:()=>({
        url:'auth/logout',
        method:'POST'
      })
    })
  }),
});

export const {useLogoutMutation, useLoginMutation, useRegisterMutation } = AuthApi;
