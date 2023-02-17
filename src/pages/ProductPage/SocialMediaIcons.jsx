import { motion } from "framer-motion";
import { images } from "../../constants/images";

export const SocialMediaIcons = () => {
  return <div className="product-page__icons">
  <motion.img 
    className="product-page__icon"
    src={images.heart} 
    alt="favorite"                  
    whileTap={{scale: 0.8}}
  />
  <motion.img 
    className="product-page__icon product-page__icon-line"
    src={images.line} 
    alt="separator"                  
    whileTap={{scale: 0.8}}
  />
  <motion.img 
    className="product-page__icon"
    src={images.email} 
    alt="email"                  
    whileTap={{scale: 0.8}}
  />
  <motion.img 
    className="product-page__icon"
    src={images.fb} 
    alt="facebook"                  
    whileTap={{scale: 0.8}}
  />
  <motion.img 
    className="product-page__icon"
    src={images.ig} 
    alt="instagram"                  
    whileTap={{scale: 0.8}}
  />
  <motion.img 
    className="product-page__icon"
    src={images.tw} 
    alt="twitter"                  
    whileTap={{scale: 0.8}}
  />               
</div>
}
