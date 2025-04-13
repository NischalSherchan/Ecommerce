import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
});

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery,
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ page = 1, limit = 3 } = {}) =>
        `product/fetchProducts?page=${page}&perPage=${limit}`,
      providesTags: ["product"],
    }),
    getProductDetails: builder.query({
      query: (id) => `/product/fetchSingleProduct/${id}`,
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (query) => ({
        url: "/product/addProduct",
        body: query.data,
        headers: {
          Authorization: `Bearer ${query.token}`,
        },
        method: "POST",
        invalidatesTags: ["product"],
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({id,token}) => ({
        url: `/product/delete-product/${id}`,
        headers:{
          Authorization: `Bearer ${token}`
        },
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query:({id,data,token}) =>(
        {
          url:`/product/update-product/${id}`,
          body:data,
          headers:{
            Authorization: `Bearer ${token}`,
          },
          method:'PATCH',
          invalidatesTags:['product']
        }
      )

    })
  }),
});

export const {
  useGetProductQuery,
  useGetProductDetailsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation
} = ProductApi;