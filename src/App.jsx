import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage, ProductPage } from "./pages";
import { useSelector } from "react-redux";
import { Auth } from "./components/Auth/Auth";

import { Navbar } from "./layout/Navbar/Navbar";
import { Cart } from "./components";
import "./App.scss";

const App = () => {
	const showCart = useSelector((state) => state.cart.show);

	return (
		<div className="app">
			<BrowserRouter>
				{/* Shows in all pages */}
				<Navbar />
				{showCart && <Cart />}

				<Routes>
					<Route path="/auth/:auth" element={<Auth />} />
					<Route path="/products/:id" element={<ProductPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/" element={<HomePage />} />

					{/* This must always be at the end */}
					<Route path="*" element={<h1>Not found</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
