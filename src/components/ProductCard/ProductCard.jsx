import { images } from "../../constants/images"
import "./ProductCard.scss";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__img-box">
        <img className="product-card__img" src={images.earrings} alt="earrings" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">Lira Earrings</h3>
        <p className="product-card__price">$20.00</p>
      </div>
    </div>
  )
}
