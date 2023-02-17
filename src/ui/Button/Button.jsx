import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./Button.scss";

export const Button = ({variant, handleClick, children, classes}) => {
  return <motion.button className={`btn ${classes} btn__${variant}`} whileTap={{scale: 0.9}} onClick={handleClick} >{children}</motion.button>
}

Button.propTypes = {
  variant: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any,
  classes: PropTypes.string
}
