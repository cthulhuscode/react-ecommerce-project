import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authUser: undefined,
	token: undefined,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthUser: (state, action) => {
			state.authUser = action.payload;
		},
		logoutAuthUser: (state) => {
			state.authUser = undefined;
			state.token = undefined;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setAuthUser, logoutAuthUser, setToken } = userSlice.actions;
