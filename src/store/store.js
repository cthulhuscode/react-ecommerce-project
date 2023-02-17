import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apis";
import { cartSlice, categoriesSlice } from "./slices";

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		categories: categoriesSlice.reducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});
