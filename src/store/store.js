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
import { storeApi } from "./apis";
import { cartSlice, categoriesSlice, userSlice } from "./slices";

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	categories: categoriesSlice.reducer,
	user: userSlice.reducer,
	[storeApi.reducerPath]: storeApi.reducer,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["storeApi"], // Avoid persisting productsApi
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(storeApi.middleware),
});

export const persistor = persistStore(store);
