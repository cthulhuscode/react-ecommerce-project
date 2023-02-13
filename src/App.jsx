import { Home } from "./pages/Home/Home";
import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./layout/Navbar/Navbar";
import { ProductCard } from "./components/ProductCard/ProductCard"

const App = () => {
	return <div className="app">
		<BrowserRouter>
		{/* Shows in all pages */}
		<Navbar />		
		<Routes>
			<Route path="/" element={<Home />} />			
			<Route path="/products" element={<ProductCard />} />			

			{/* This must always be at the end */}
			<Route path="*" element={<h1>Not found</h1>}/>
		</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
