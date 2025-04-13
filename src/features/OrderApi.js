import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrderApi = createApi({
    reducerPath:'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl :  import.meta.env.VITE_BASE_URL,
    }),
    tagTypes:['order'],
    endpoints:(builder) =>({
        addOrder: builder.mutation({
            query:(query) => ({
                url:'/order',
                method:'POST',
                body:query.data,
                headers:{
                    Authorization: `Bearer ${query.token}`,
                }
            })
        })
    })
})

export const {useAddOrderMutation} = OrderApi;