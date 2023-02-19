import "./CheckoutPage.scss";

export const CheckoutPage = () => {
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
						<input type="text" placeholder="Company Name" />
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
					<div className="checkout-orderItems"></div>
				</div>
			</div>
		</div>
	);
};
