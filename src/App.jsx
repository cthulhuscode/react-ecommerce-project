import { HashRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import {
	HomePage,
	ProductsPage,
	ProductPage,
	ErrorPage,
	AuthPage,
	ShoppingCartPage,
	CheckoutPage,
} from "./pages";
import { Navbar, Footer } from "./layout";
import { Cart } from "./components";
import "./App.scss";

const App = () => {
	const showCart = useSelector((state) => state.cart.show);

	return (
		<div className="app">
			<HashRouter>
				{/* Shows in all pages */}
				<Navbar />
				{showCart && <Cart />}
				<Routes>
					<Route path="/auth/:auth" element={<AuthPage />} />
					<Route path="/products/:id" element={<ProductPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/shopping-cart" element={<ShoppingCartPage />} />
					<Route path="/shopping-cart/checkout" element={<CheckoutPage />} />

					{/* This must always be at the end */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>

				<Footer />
			</HashRouter>
		</div>
	);
};

export default App;
