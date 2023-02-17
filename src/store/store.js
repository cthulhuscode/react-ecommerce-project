import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsApi } from "./apis";
import { cartSlice, categoriesSlice } from "./slices";

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	categories: categoriesSlice.reducer,
	[productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["products"], // Avoid persisting productsApi
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(productsApi.middleware),
});

export const persistor = persistStore(store);
