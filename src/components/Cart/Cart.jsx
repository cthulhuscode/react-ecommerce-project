// import { images } from "../../constants/images";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import { toggleCart } from "../../store/slices";
import { Button } from "../../ui";
import { CartProductCard } from "./CartProductCard";
import "./Cart.scss";

export const Cart = () => {

  const dispatch = useDispatch();

  return (
    <motion.div 
    className="cart"
    initial={{ width: 0 }}
    animate={{ width: 300 }}
    transition={{duration: 0.85, ease: "easeOut"}}
    >
      <div className="cart__top">
        <h3 className="cart__title">Shopping cart</h3>
        <div className="cart__subtitle">
          <span className="cart__counter">5 items</span>
          <span className="cart__clear">Clear cart</span>
        </div>
      </div>

      <div className="cart__list">
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </div>
      
      <div className="cart__bottom">
        <div className="cart__bottom-prices">
          <span className="cart__subtotal">Subtotal ({5} items)</span>
          <span className="cart__price">$ {897}</span>
        </div>
        <Button 
          variant={"white"} 
          handleClick={() => {console.log("View cart")}} 
          classes={"cart__btn"}
        >
          View Cart
        </Button>
      </div>
      

      <motion.button 
        className="cart__close"
        whileHover={{scale: 1.05}} 
        whileTap={{scale: 0.8}} 
        onClick={() => dispatch(toggleCart())} 
      >x
      </motion.button>  
    </motion.div>
  )
}
