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
import { Cart, PrivateRoute } from "./components";
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
					{/* Most specific routes first */}
					<Route path="/checkout"
						element={
							<PrivateRoute>
								<CheckoutPage />
							</PrivateRoute>
						}
					/>
					<Route path="/products/:id" element={<ProductPage />} />
					<Route path="/auth" element={<AuthPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/cart" element={<ShoppingCartPage />} />
					<Route path="/" element={<HomePage />} />

					{/* This must always be at the end */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>

				<Footer />
			</HashRouter>
		</div>
	);
};

export default App;
