import { ProductsList, Cart, Categories } from "../../components";

export const HomePage = () => {
	return (
		<div className="home">
			<Categories />
			<ProductsList />
			<Cart />
		</div>
	);
};
