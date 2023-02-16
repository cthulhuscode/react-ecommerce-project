import { motion } from "framer-motion";
import { useState } from "react";

import { images } from "../../constants/images";
import { InputNumber } from "../../ui";
import "./CartProductCard.scss"

export const CartProductCard = () => {
  const [ amount, setAmount ] = useState(1);

  return (
    <div className="cart-p-card">
      <img className="cart-p-card__img" src={images.earrings} alt="earrings" />
      <div className="cart-p-card__info">
        <div>
          <h3 className="cart-p-card__name">Lira Earrings</h3>
          <p className="cart-p-card__price">$ {200}</p>
        </div>
        <InputNumber value={amount} setValue={setAmount} classes={"cart-p-card__amount"} />
      </div>
      <motion.button 
        whileHover={{scale: 1.05}} 
        whileTap={{scale: 0.8}}  
        className="cart-p-card__remove">x
      </motion.button>
    </div>
  )
}
