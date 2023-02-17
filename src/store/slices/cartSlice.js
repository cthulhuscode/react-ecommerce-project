import { createSlice } from "@reduxjs/toolkit";

// const product = {
// 	product: object
// 	pricePerAll: number
// 	amount: number
// }

const initialState = {
	products: {},
	show: false,
	productsCount: 0,
	cartPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.show = !state.show;
		},
		addProductToCart: (state, action) => {
			const { productData, amount } = action.payload;
			const { item_id: id, price } = productData;

			// Update existing product
			let product = {};
			if (state.products[id]) {
				product = state.products[id];
				product.amount += amount;
				product.pricePerAll = product.amount * price;
			} else {
				// Create new product
				product = {
					data: productData,
					amount,
					pricePerAll: amount * price,
				};
			}

			// Add product to the cart
			state.products[id] = product;

			updateCart(state);
		},
		changeCartProductAmount: (state, action) => {
			const { productData, amount } = action.payload;
			const { item_id: id, price } = productData;

			state.products[id].amount = amount;
			state.products[id].pricePerAll = state.products[id].amount * price;

			updateCart(state);
		},
		removeCartProduct: (state, action) => {
			delete state.products[action.payload];
			updateCart(state);
		},
		clearCart: (state) => {
			state.products = {};
			state.productsCount = 0;
			state.cartPrice = 0;
		},
	},
});

function updateCart(state) {
	let newCartPrice = 0;
	let newProductsCount = 0;
	for (const product of Object.values(state.products)) {
		newCartPrice += product.pricePerAll;
		newProductsCount += product.amount;
	}
	state.cartPrice = newCartPrice;
	state.productsCount = newProductsCount;
}

// Action creators are generated for each case reducer function
export const {
	toggleCart,
	addProductToCart,
	changeCartProductAmount,
	removeCartProduct,
	clearCart,
} = cartSlice.actions;
