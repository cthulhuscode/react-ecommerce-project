import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { changeCartProductAmount, removeCartProduct } from "../../store/slices";
import { useDispatch } from "react-redux";

import { InputNumber } from "../../ui";
import "./CartProductCard.scss"

export const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pricePerAll, data: productData, amount: productAmount } = product;
  const { imageUrl, name, item_id: id } = productData;
  const [ inputAmount, setInputAmount ] = useState(productAmount);  

  const handleRemoveProductClick = () => {
    dispatch(removeCartProduct(id));
  }

  useEffect(() => {
    dispatch(changeCartProductAmount({productData, amount: inputAmount}));
  }, [inputAmount]);

  return (
    <div className="cart-p-card">
      <img className="cart-p-card__img" src={imageUrl} alt="earrings" />
      <div className="cart-p-card__info">
        <div>
          <h3 className="cart-p-card__name">{name}</h3>
          <p className="cart-p-card__price">$ {pricePerAll}</p>
        </div>
        <InputNumber value={productAmount} setValue={setInputAmount} classes={"cart-p-card__amount"} />
      </div>
      <motion.button 
        whileHover={{scale: 1.05}} 
        whileTap={{scale: 0.8}}  
        className="cart-p-card__remove"
        onClick={handleRemoveProductClick}
      >x
      </motion.button>
    </div>
  )
}

CartProductCard.propTypes = {
  product: PropTypes.object
}