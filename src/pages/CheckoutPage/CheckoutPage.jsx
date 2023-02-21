import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/slices";

import "./CheckoutPage.scss";

export const CheckoutPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const products = useSelector((state) => state.cart.products);
	const cartProducts = Object.values(products);
	const subtotal = cartProducts.reduce(
		(acc, curr) => acc + curr.pricePerAll,
		0
	);
	const total = subtotal + 20;

	const fakePayment = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 4000);
		})
	};

	const handlePlaceOrderClick = async () => {
		const pay = fakePayment();
		await toast.promise(pay, {
			loading: "Processing payment",
			success: "Purchase successfully completed!",
			error: "Error while making the purchase"
		})
		dispatch(clearCart());
		navigate("/", { replace: true });
	}

	return (
		<div className="checkout">
			<h2 className="checkout-title">Checkout</h2>
			<p className="checkout-parrafo">
				{/* Poner enlace a registro */}
				Returning customer? <a href="">Click here to login</a>
			</p>
			<div className="checkout-grid">
				<div className="checkout-details">
					<h3 className="checkout-subtitle">Billing Details</h3>
					<div className="checkout-datos">
						<div className="checkout-col">
							<input type="text" placeholder="First name *" />
							<input type="text" placeholder="Last name *" />
						</div>
						<input id="hola" type="text" placeholder="Company Name" />
						<input type="text" placeholder="Country *" />
						<input type="text" placeholder="Street Address *" />
						<input type="text" placeholder="Postcode / ZIP *" />
						<input type="text" placeholder="Town / City *" />
						<input type="text" placeholder="Phone *" />
						<input type="text" placeholder="Email *" />
					</div>
				</div>
				<div className="checkout-order">
					<h3 className="checkout-subtitle">Your Order</h3>
					<div className="checkout-orderItems">
						<div className="checkout-orderCol">
							<h3 className="checkout-itemsTitle">Product</h3>
							<h3 className="checkout-itemsTitle">Total</h3>
						</div>
						{cartProducts.map((product) => (
							<div className="checkout_contentcart" key={product.data.item_id}>
								<h3 className="checkout-subtitle2">{product.data.name}</h3>
								<h3 className="checkout-subtitle2">${product.pricePerAll}</h3>
							</div>
						))}
						<div className="checkout-orderCol">
							<h3 className="checkout-itemsTitle">Subtotal</h3>
							<h3 className="checkout-subtitle2">${subtotal}</h3>
						</div>
						<div className="checkout-orderCol">
							<h3 className="checkout-itemsTitle">Shipping</h3>
							<h3 className="checkout-subtitle2">$20</h3>
						</div>
						<div className="checkout-orderCol">
							<h3 className="checkout-items">Total</h3>
							<h3 className="checkout-items">${total}</h3>
						</div>
						<form className="checkout-form">
							<input type="radio" id="bank" value="bank" name="check" />
							<label className="checkout-label">Direct bank transfer</label>
							<br />
							<input type="radio" id="payments" value="payments" name="check" />
							<label className="checkout-label">Check payments</label>
							<br />
							<input type="radio" id="delivery" name="check" />
							<label className="checkout-label">Cash on delivery</label>
							<br />
							<input type="radio" id="paypal" name="check" />
							<label className="checkout-label">PayPal </label>
							<button className="btn-black" onClick={handlePlaceOrderClick}>Place order</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
