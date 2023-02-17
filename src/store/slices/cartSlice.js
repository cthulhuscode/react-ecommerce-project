import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	show: false,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.show = !state.show;
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleCart } = cartSlice.actions;
