import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
	reducerPath: "storeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().user.token;

			// If we have a token set in state, let's assume that we should be passing it.
			if (token) {
				headers.set("x-auth-token", token);
			}

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => "/store/collections",
		}),
		getAuthUser: builder.query({
			query: () => "/auth",
		}),
		registerUser: builder.mutation({
			query: (user) => ({
				url: "auth",
				method: "POST",
				body: user,
				responseHandler: (response) => {},
			}),
		}),
		loginUser: builder.mutation({
			query: (user) => ({
				url: "auth/login",
				method: "POST",
				body: user,
			}),
		}),
	}),
});

export const { useGetProductsQuery, useGetAuthUserQuery } = storeApi;
