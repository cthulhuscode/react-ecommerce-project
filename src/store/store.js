import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apis";
import { cartSlice } from "./slices";

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});
