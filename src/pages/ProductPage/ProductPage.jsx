
import { useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { useGetProductsQuery } from "../../store/apis";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../../store/slices/cartSlice";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { Stars } from "./Stars";
import { InputNumber } from "../../ui";
import "./ProductPage.scss";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const { data, isLoading } = useGetProductsQuery();
  const product =  data?.data.find(product => product.item_id.toString() === id.toString()); 

  const handleAddCartBtnClick = () => {
    dispatch(addProductToCart({
      productData: product,
      amount,
    }))
  }

  return (
    <div className="product-page">
      {! isLoading 
        ? <>
            <div className="product-page__img-box">
              <img className="product-page__img" src={product.imageUrl} alt={product.name}/>
            </div>
            <div className="product-page__info">
              <h2 className="product-page__name">{product.name}</h2>
              <h3 className="product-page__price">$ {product.price}</h3>

              <div className="product-page__rating">
                <Stars />
                <span className="product-page__reviews-count">1 customer review</span>
              </div>

              <p className="product-page__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum animi alias, placeat maiores magni inventore aspernatur quae accusamus nobis ullam beatae hic doloremque esse magnam. Nemo accusamus suscipit sit.</p>

              <div className="product-page__add-cart" >                
                <InputNumber value={amount} setValue={setAmount} />
                <motion.button className="product-page__btn" whileTap={{scale: 0.9}} onClick={handleAddCartBtnClick}>Add to Cart</motion.button>
              </div>

              <SocialMediaIcons />

              <h4 className="product-page__sku">SKU: <span className="product-page__sku--gray">{product.item_id}</span></h4>
              <h4 className="product-page__categories">Categories: <span className="product-page__categories--gray">{product.title}</span></h4>

            </div>
          </>
        : <p>Loading...</p>
      }      
    </div>
  )
}