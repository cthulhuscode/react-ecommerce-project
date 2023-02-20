// import { images } from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart, clearCart } from "../../store/slices";
import { Button } from "../../ui";
import { CartProductCard } from "./CartProductCard";
import "./Cart.scss";

export const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { products, productsCount, cartPrice } = cart;
	const cartProducts = Object.values(products);

	const handleViewCartClick = () => {
		dispatch(toggleCart());
		navigate("/cart")
	}

	return (
		<motion.div
			className="cart"
			initial={{ width: 0 }}
			animate={{ width: 300 }}
			transition={{ duration: 0.85, ease: "easeOut" }}
		>
			<div className="cart__top">
				<h3 className="cart__title">Shopping cart</h3>
				<div className="cart__subtitle">
					<span className="cart__counter">{productsCount} items</span>
					<span className="cart__clear" onClick={() => dispatch(clearCart())}>
						Clear cart
					</span>
				</div>
			</div>

			<div className="cart__list">
				{cartProducts &&
					cartProducts.map((product) => (
						<CartProductCard key={product.data.item_id} product={product} />
					))}
			</div>

			<div className="cart__bottom">
				<div className="cart__bottom-prices">
					<span className="cart__subtotal">
						Subtotal ({productsCount} items)
					</span>
					<span className="cart__price">$ {cartPrice}</span>
				</div>


				<Button
					variant={"white"}
					handleClick={handleViewCartClick}
					classes={"cart__btn"}
				>
					View Cart
				</Button>

			</div>

			<motion.button
				className="cart__close"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.8 }}
				onClick={() => dispatch(toggleCart())}
			>
				x
			</motion.button>
		</motion.div>
	);
};
