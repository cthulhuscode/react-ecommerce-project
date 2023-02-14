import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "products",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "/store/collections",
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
