import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selected: "All",
};

export const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		selectCategory: (state, action) => {
			state.selected = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { selectCategory } = categoriesSlice.actions;
