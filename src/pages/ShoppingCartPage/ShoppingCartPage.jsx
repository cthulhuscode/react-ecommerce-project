import "./ShoppingCartPage.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartProductCard } from "../../components/Cart/CartProductCard";

export const ShoppingCartPage = () => {
	const navigate = useNavigate();
	const products = useSelector((state) => state.cart.products);
	const cartProducts = Object.values(products);
	const subtotal = cartProducts.reduce(
		(acc, curr) => acc + curr.pricePerAll,
		0
	);
	const total = subtotal + 20;

	const handleCheckoutClick = () => {
		navigate("/checkout");
	}

	return (
		<div className="ShoppingCartPage">
			<h2 className="ShoppingCartPage_title">Shopping Cart</h2>
			<div className="ShoppingCartPage_content">
				<div className="ShoppingCartPage_cart">
					<div className="ShoppingCartPage_items">
						{cartProducts &&
							cartProducts.map((product) => (
								<div
									className="ShoppingCartPage_items2"
									key={product.data.item_id}
								>
									<CartProductCard product={product} />
								</div>
							))}
					</div>
					<button className="btn-white">Update cart</button>
				</div>
				<div className="ShoppingCartPage_totals">
					<h3 className="ShoppingCartPage_title2">Cart Totals</h3>
					<div className="ShoppingCartPage_col">
						<h4 className="ShoppingCartPage_title3">Subtotal</h4>
						<p className="ShoppingCartPage_parrafo">${subtotal}</p>
					</div>
					<div className="ShoppingCartPage_col">
						<h4 className="ShoppingCartPage_title3">Shipping</h4>
						<p className="ShoppingCartPage_parrafo">$20.00</p>
					</div>
					<div className="ShoppingCartPage_col">
						<h4 className="ShoppingCartPage_title4">Total</h4>
						<p className="ShoppingCartPage_parrafo2">${total}</p>
					</div>

					<button className="btn-black" onClick={handleCheckoutClick}>Proceed to checkout</button>

				</div>
			</div>
		</div>
	);
};
