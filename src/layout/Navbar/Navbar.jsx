import { images } from "../../constants/images";
import {motion} from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuClick = (e) => {
    // e.stopPropagation();
    setToggle(prevState => !prevState);
  } 

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={images.logo} alt="Shoppe" />

      <ul className="navbar-list">
        <li className="navbar-list__item">
          <a className="navbar-list__anchor" href="#">Shop</a>
        </li>
        <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.line} alt="line" />          
        </li>
        {/* <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.lupa} alt="buscar" />
        </li> */}
        <li className="navbar-list__item">
          <motion.img 
            className="navbar-list__icon" 
            src={images.cart} 
            alt="carrito de compra"
            whileHover={{scale: 1.15}}
            whileTap={{scale: 0.8}}
          />
        </li>
        <li className="navbar-list__item">
          <motion.img 
            className="navbar-list__icon" 
            src={images.account} 
            alt="cuenta"
            whileHover={{scale: 1.15}}
            whileTap={{scale: 0.8}}            
           />          
        </li>
      </ul>

      <div className="navbar-menu">

        <motion.img 
          whileHover={{scale: 1.15}}
          whileTap={{scale: 0.8}}
          onClick={handleMenuClick} 
          className="navbar-menu__icon" 
          src={images.menu} 
          alt="Menu"
        />

        { toggle && (
          <motion.div
            className="navbar-menu__content"
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{duration: 0.85, ease: "easeOut"}}
          >
            <motion.span
              className="navbar-menu__close"
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.8}}    
            >
              <img 
                className="navbar-menu__close-icon" 
                src={images.close} 
                alt="close" 
                onClick={handleMenuClick}
              />
            </motion.span>

            <ul className="navbar-menu__list">
              <li className="navbar-menu__item">Home</li>
              <li className="navbar-menu__item">Shop</li>
              <li className="navbar-menu__item">Cart</li>
              <hr className="navbar-menu__separator"/>
              <li className="navbar-menu__item">
                <img src={images.account} alt="" />
                <span>My account</span>
              </li>
              <li className="navbar-menu__item">
                <img src={images.logout} alt="logout" />
                <span>Logout</span>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
