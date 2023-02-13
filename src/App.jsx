import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage, ProductPage } from "./pages";
import { Navbar } from "./layout/Navbar/Navbar";
import "./App.scss"

const App = () => {
	return <div className="app">
		<BrowserRouter>
			{/* Shows in all pages */}
			<Navbar />	
				
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
