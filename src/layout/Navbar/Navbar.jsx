import { images } from "../../constants/images";
import {motion} from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const isAuth = false;

  const handleMenuClick = (e) => {
    // e.stopPropagation();
    setToggle(prevState => !prevState);
  } 

  return (
    <nav className="navbar">

      <Link to="/">
        <img className="navbar__logo" src={images.logo} alt="Shoppe" />
      </Link>

      {/* Desktop menu */}
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <NavLink 
            to="/products"
            className={({ isActive }) => isActive 
              ? "navbar-list__anchor navbar-list__anchor--active" 
              : "navbar-list__anchor"
            }>Shop
          </NavLink>
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

      {/* Mobile menu */}
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

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/">Home</Link>
              </li>

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/products">Shop</Link>
              </li>

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/checkout">Cart</Link>
              </li>

              <hr className="navbar-menu__separator"/>

              <li className="navbar-menu__item">
                <Link className="navbar-menu__item-link" to="/products">                  
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
