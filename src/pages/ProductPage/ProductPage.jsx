import { useParams } from "react-router";
import {motion} from "framer-motion";
import { useGetProductsQuery } from "../../store/apis"
import { images } from "../../constants/images";
import "./ProductPage.scss";

export const ProductPage = () => {

  const { id } = useParams();
  const { data, isLoading } = useGetProductsQuery();
  const product =  data?.data.find(product => product.item_id.toString() === id.toString()); 

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
                <div className="product-page__stars">
                  <img className="product-page__star" src={images.star} />
                  <img className="product-page__star" src={images.star} />
                  <img className="product-page__star" src={images.star} />
                  <img className="product-page__star" src={images.star} />
                  <img className="product-page__star" src={images.star} />
                </div>
                <span className="product-page__reviews-count">1 customer review</span>
              </div>

              <p className="product-page__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum animi alias, placeat maiores magni inventore aspernatur quae accusamus nobis ullam beatae hic doloremque esse magnam. Nemo accusamus suscipit sit.</p>

              <div className="product-page__add-cart" >
                <input className="product-page__amount" type="number" name="amount" id="amount" />
                <motion.button className="product-page__btn" whileTap={{scale: 0.9}}>Add to Cart</motion.button>
              </div>

              <div className="product-page__icons">
                <motion.img 
                  className="product-page__icon"
                  src={images.heart} 
                  alt="carrito de compra"                  
                  whileTap={{scale: 0.8}}
                />
                <motion.img 
                  className="product-page__icon product-page__icon-line"
                  src={images.line} 
                  alt="carrito de compra"                  
                  whileTap={{scale: 0.8}}
                />
                <motion.img 
                  className="product-page__icon"
                  src={images.email} 
                  alt="carrito de compra"                  
                  whileTap={{scale: 0.8}}
                />
                <motion.img 
                  className="product-page__icon"
                  src={images.fb} 
                  alt="carrito de compra"                  
                  whileTap={{scale: 0.8}}
                />
                <motion.img 
                  className="product-page__icon"
                  src={images.ig} 
                  alt="carrito de compra"                  
                  whileTap={{scale: 0.8}}
                />
                <motion.img 
                  className="product-page__icon"
                  src={images.tw} 
                  alt="carrito de compra"                  
                  whileTap={{scale: 0.8}}
                />               
              </div>

              <h4 className="product-page__sku">SKU: <span className="product-page__sku--gray">{product.item_id}</span></h4>
              <h4 className="product-page__categories">Categories: <span className="product-page__categories--gray">{product.title}</span></h4>

            </div>
          </>
        : <p>Loading...</p>
      }      
    </div>
  )
}