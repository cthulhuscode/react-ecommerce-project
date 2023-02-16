
import { useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { useGetProductsQuery } from "../../store/apis"

import { images } from "../../constants/images";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { Stars } from "./Stars";
import "./ProductPage.scss";

export const ProductPage = () => {

  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const { data, isLoading } = useGetProductsQuery();
  const product =  data?.data.find(product => product.item_id.toString() === id.toString()); 

  const handleAmountClick = (e) => {
    const operation = e.target.name;
    if(operation === "inc")
      setAmount(amount + 1);
    else if(operation === "dec"){
      if(amount > 1)
        setAmount(amount - 1);
    }
  }

  const handleAmountChange = (e) => {
    const onlyNumbers = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/g;
    const newAmount = e.target.value;
    
    if(onlyNumbers.test(newAmount))
      setAmount(newAmount);
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
                <div className="product-page__amount">
                  <motion.button 
                    className="product-page__amount-dec"
                    onClick={handleAmountClick} 
                    whileHover={{scale: 1.5}} 
                    whileTap={{scale: 0.8}} 
                    name="dec"                    
                  >
                    <img onClick={handleAmountClick} name="dec" src={images.dec} alt="decrement"/>
                  </motion.button>                  
                  <input className="product-page__amount-val" type="text" onChange={handleAmountChange} value={amount} /> 
                  <motion.button 
                    className="product-page__amount-inc"
                    onClick={handleAmountClick} 
                    whileHover={{scale: 1.5}} 
                    whileTap={{scale: 0.8}} 
                    name="inc"                    
                  >
                    <img onClick={handleAmountClick} name="inc" src={images.inc} alt="increment"/>
                  </motion.button>
                </div>

                <motion.button className="product-page__btn" whileTap={{scale: 0.9}}>Add to Cart</motion.button>
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