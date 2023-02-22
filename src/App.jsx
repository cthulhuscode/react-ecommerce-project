import { HashRouter, Route, Routes } from "react-router-dom";

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
import { PrivateRoute } from "./components";
import "./App.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
	console.log(import.meta.env.VITE_API_URL);
	console.log("xd");

	return (
		<div className="app">
			<HashRouter>
				{/* Shows in all pages */}
				<Navbar />
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

			{/* Notifications */}
			<Toaster />
		</div>
	);
};

export default App;
