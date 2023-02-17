import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage, ProductPage } from "./pages";
import { Navbar } from "./layout/Navbar/Navbar";
import "./App.scss"
import { Cart } from "./components";
import { useSelector } from "react-redux";

const App = () => {

	const showCart = useSelector(state => state.cart.show);

	return <div className="app">
		<BrowserRouter>
			{/* Shows in all pages */}
			<Navbar />	
			{showCart && <Cart />}
				
			<Routes>
				<Route path="/" element={<HomePage />} />			
				<Route path="/products" element={<ProductsPage />} />			
				<Route path="/products/:id" element={<ProductPage />} />	

				{/* This must always be at the end */}
				<Route path="*" element={<h1>Not found</h1>}/>
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
