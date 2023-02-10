import { images } from "../../constants/images"
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={images.logo} alt="Shoppe" />
      <ul className="navbar-list">
        <li className="navbar-list__item">
          <a className="navbar-list__anchor" href="#">Shop</a>
        </li>
        <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.line} alt="buscar" />          
        </li>
        <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.lupa} alt="buscar" />
        </li>
        <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.cart} alt="carrito de compra" />
        </li>
        <li className="navbar-list__item">
          <img className="navbar-list__icon" src={images.account} alt="cuenta" />
        </li>
      </ul>
    </div>
  )
}
