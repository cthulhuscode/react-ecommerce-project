import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { selectCategory, toggleCart } from "../../store/slices";
import { images } from "../../constants/images";
import { AccountMenu } from "./AccountMenu/AccountMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import "./Navbar.scss";
import { useOutsideClick } from "../../hooks";
import { Cart } from "../../components";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsCount = useSelector(state => state.cart.productsCount);
  const showCart = useSelector(state => state.cart.show);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  /* Account menu ref */
  const accountMenuRef = useRef(null);
  const accountOutsideClick = useOutsideClick(accountMenuRef);

  /* Cart menu ref */
  const cartRef = useRef(null);
  const cartOutsideClick = useOutsideClick(cartRef);

  const handleMobileMenuClick = (e) => {
    // e.stopPropagation();
    if (showCart)
      dispatch(toggleCart())

    if (showAccountMenu)
      setShowAccountMenu(false);

    setShowMobileMenu(prevState => !prevState);
  }

  const handleCartClick = () => {
    if (showAccountMenu)
      setShowAccountMenu(false);

    if (showMobileMenu)
      setShowMobileMenu(false);

    if (!cartOutsideClick)
      dispatch(toggleCart());
  }

  const handleAccountClick = () => {
    if (showCart)
      dispatch(toggleCart())

    /* Only activate when is false, otherwise the
      state goes false and then the action
      changes it to true, which in the end
      the menu never gets close
    */
    if (!accountOutsideClick)
      setShowAccountMenu(prevState => !prevState);
  }

  const handleLogoClick = () => {
    dispatch(selectCategory("All"));
    navigate("/");
  }

  useEffect(() => {
    setShowAccountMenu(false);
  }, [accountOutsideClick])

  useEffect(() => {
    if (showCart)
      dispatch(toggleCart())
  }, [cartOutsideClick])

  return (
    <nav className="navbar">

      <motion.img whileTap={{ scale: 0.99 }} className="navbar__logo" src={images.logo} alt="Shoppe" onClick={handleLogoClick} />

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
        <li className="navbar-list__item navbar-list__item-cart" onClick={handleCartClick}>
          <motion.img
            className="navbar-list__icon"
            src={images.cart}
            alt="carrito de compra"
            whileTap={{ scale: 0.8 }}
          />
          <span className="navbar-list__counter">{productsCount}</span>
        </li>
        {showCart && <Cart ref={cartRef} />}

        <li className="navbar-list__item navbar-list__item-account">
          <motion.img
            className="navbar-list__icon"
            src={images.account}
            alt="cuenta"
            whileTap={{ scale: 0.8 }}
            onClick={handleAccountClick}
          />

          {/* Account Menu */}
          {showAccountMenu && <AccountMenu ref={accountMenuRef} />}

        </li>
      </ul>

      {/* Mobile menu */}
      <div className="navbar-menu">
        <ul className="navbar-menu__icons">
          <li
            className="navbar-menu__icons-item"
            onClick={handleCartClick}
          >
            <motion.img
              className="navbar-menu__icon"
              src={images.cart}
              alt="carrito de compra"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.8 }}
            />
            <span className="navbar-menu__icons-item-counter">{productsCount}</span>
          </li>
          <li className="navbar-menu__icons-item">
            <motion.img
              className="navbar-menu__icon"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.8 }}
              onClick={handleMobileMenuClick}
              src={images.menu}
              alt="Menu"
            />
          </li>
        </ul>

        {showMobileMenu && <MobileMenu handleMobileMenuClick={handleMobileMenuClick} />}
      </div>
    </nav>
  )
}
