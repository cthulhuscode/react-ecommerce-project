import { Link } from "react-router-dom";
import { useState } from "react";
import {motion} from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../store/slices";
import { images } from "../../constants/images";
import "./Navbar.scss";

export const Navbar = () => {
  const dispatch = useDispatch();
  const productsCount = useSelector(state => state.cart.productsCount);
  const showCart = useSelector(state => state.cart.show);
  const [toggle, setToggle] = useState(false);
  const isAuth = false;

  const handleMenuClick = (e) => {
    // e.stopPropagation();
    if(showCart)
      dispatch(toggleCart())
    setToggle(prevState => !prevState);
  } 

  return (
    <nav className="navbar">

      <Link to="/">
        <motion.img whileTap={{scale: 0.99}} className="navbar__logo" src={images.logo} alt="Shoppe" />
      </Link>

      {/* Desktop menu */}
      <ul className="navbar-list">
        {/* <li className="navbar-list__item">
          <NavLink 
            to="/products"
            className={({ isActive }) => isActive 
              ? "navbar-list__anchor navbar-list__anchor--active" 
              : "navbar-list__anchor"
            }>Shop
          </NavLink>
        </li> */}
        {/* <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.line} alt="line" />          
        </li> */}
        {/* <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.lupa} alt="buscar" />
        </li> */}
        <li className="navbar-list__item navbar-list__item-cart" onClick={() => dispatch(toggleCart())}>
          <motion.img 
            className="navbar-list__icon" 
            src={images.cart} 
            alt="carrito de compra"
              whileHover={{scale: 1.15}}
              whileTap={{scale: 0.8}}
          />
          <span className="navbar-list__counter">{productsCount}</span>
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

      {/* Mobile menu */}
      <div className="navbar-menu">
        <ul className="navbar-menu__icons">
          <li 
            className="navbar-menu__icons-item" 
            onClick={() => dispatch(toggleCart())}
          >
            <motion.img 
              className="navbar-menu__icon" 
              src={images.cart} 
              alt="carrito de compra"
                whileHover={{scale: 1.15}}
                whileTap={{scale: 0.8}}
            />
            <span className="navbar-menu__icons-item-counter">{productsCount}</span>
          </li>
          <li className="navbar-menu__icons-item">
            <motion.img 
              className="navbar-menu__icon" 
              whileHover={{scale: 1.15}}
              whileTap={{scale: 0.8}}
              onClick={handleMenuClick} 
              src={images.menu} 
              alt="Menu"
            />
          </li>
        </ul>

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

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/">Home</Link>
              </li>

              {/* <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/products">Shop</Link>
              </li> */}

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/checkout">Cart</Link>
              </li>

              <hr className="navbar-menu__separator"/>

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/account">                  
                  <img className="navbar-menu__item-icon" src={images.account} alt="" />
                  <span className="navbar-menu__item-text">My account</span>
                </Link>
              </li>

              <li className="navbar-menu__item">
                {isAuth 
                  ? <div className="navbar-menu__item-link">                      
                      <img className="navbar-menu__item-icon" src={images.logout} alt="logout" />
                      <span className="navbar-menu__item-text">Logout</span>
                    </div> 
                  : <Link className="navbar-menu__item-link" to="/login">                  
                      <img className="navbar-menu__item-icon" src={images.login} alt="logout" style={{width: "24px", height: "24px"}}/>
                      <span className="navbar-menu__item-text">Login</span>
                    </Link>
                }
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
