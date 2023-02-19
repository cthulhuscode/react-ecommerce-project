import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { images } from "../../constants/images";

import "./InputNumber.scss";

export const InputNumber = ({ value, setValue, classes }) => {
  const handleBtnClick = (e) => {
    const operation = e.target.name;
    if (operation === "inc") setValue(value + 1);
    else if (operation === "dec") {
      if (value > 1) setValue(value - 1);
    }
  };

  const handleInputChange = (e) => {
    const onlyNumbers =
      /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/g;
    const newValue = parseInt(e.target.value);

    if (onlyNumbers.test(newValue)) setValue(newValue);
  };

  return (
    <div className={`input-number ${classes}`}>
      <motion.button
        className="input-number__btn input-number__dec"
        onClick={handleBtnClick}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        name="dec"
      >
        <img
          onClick={handleBtnClick}
          name="dec"
          src={images.dec}
          alt="decrement"
        />
      </motion.button>
      <input
        className="input-number__val"
        type="text"
        onChange={handleInputChange}
        value={value}
      />
      <motion.button
        className="input-number__btn input-number__inc"
        onClick={handleBtnClick}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        name="inc"
      >
        <img
          onClick={handleBtnClick}
          name="inc"
          src={images.inc}
          alt="increment"
        />
      </motion.button>
    </div>
  );
};

InputNumber.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
  classes: PropTypes.string,
};
