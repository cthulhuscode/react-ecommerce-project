import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { images } from "../../../constants/images";
import { Link } from "react-router-dom";
import "./MobileMenu.scss"

export const MobileMenu = ({ handleMobileMenuClick }) => {

  const isAuth = false;

  return (
    <motion.div
      className="menu"
      initial={{ width: 0 }}
      animate={{ width: 300 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <motion.span
        className="menu__close"
        initial={{ width: 0 }}
        animate={{ width: 70 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <img
          className="menu__close-icon"
          src={images.close}
          alt="close"
          onClick={handleMobileMenuClick}
        />
      </motion.span>

      <ul className="menu__list">

        <li className="menu__item">
          <Link className="menu__item-link" to="/">Home</Link>
        </li>

        {/* <li className="menu__item">
                <Link className="menu__item-link" to="/products">Shop</Link>
              </li> */}

        <li className="menu__item">
          <Link className="menu__item-link" to="/checkout">Cart</Link>
        </li>

        <hr className="menu__separator" />

        <li className="menu__item">
          <Link className="menu__item-link" to="/account">
            <img className="menu__item-icon" src={images.account} alt="" />
            <span className="menu__item-text">My account</span>
          </Link>
        </li>

        <li className="menu__item">
          {isAuth
            ? <div className="menu__item-link">
              <img className="menu__item-icon" src={images.logout} alt="logout" />
              <span className="menu__item-text">Logout</span>
            </div>
            : <Link className="menu__item-link" to="/login">
              <img className="menu__item-icon" src={images.login} alt="logout" style={{ width: "24px", height: "24px" }} />
              <span className="menu__item-text">Login</span>
            </Link>
          }
        </li>
      </ul>
    </motion.div>
  )
}

MobileMenu.propTypes = {
  handleMobileMenuClick: PropTypes.func
}
