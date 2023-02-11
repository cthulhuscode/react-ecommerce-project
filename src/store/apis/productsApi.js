import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
	reducerPath: "products",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:5000/api",
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "/store/collections",
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
