import PropTypes from "prop-types";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "../../constants/images";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;

  return (
    <div className="product-card">
      <div className="product-card__img-box">
        <img className="product-card__img" src={imageUrl} alt="earrings" />
      </div>
      <div className="product-card__content">
        <div className="product-card__info">        
          <h3 className="product-card__name">            
            <Link className="product-card__name-link" to={`/products/${product.item_id}`} >{name}</Link>
          </h3>        
          <p className="product-card__price">${price}</p>
        </div>
        <div className="product-card__cart">
          <motion.button 
            className="product-card__cart-box"
            whileTap={{scale: 0.8}}
          >
            <img className="product-card__cart-icon" src={images.addToCart} alt="Add to cart" />
          </motion.button>          
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object
}
