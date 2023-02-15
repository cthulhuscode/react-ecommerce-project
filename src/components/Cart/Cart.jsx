// import { images } from "../../constants/images";
import { motion } from "framer-motion";
import "./Cart.scss";

export const Cart = () => {
  return (
    <motion.div className="cart">
      <h3>Shopping cart</h3>
      <p>5 items</p>
      <hr />
      <div>
        <span>Subtotal ({5} items)</span>
        <span>$ {897}</span>
      </div>
      <button>View cart</button>
    </motion.div>
  )
}
