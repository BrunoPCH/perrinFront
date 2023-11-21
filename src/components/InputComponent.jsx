import { useState } from "react";
import PropTypes from "prop-types";
import validationIcon from "../assets/validationIcon.svg";
import "../styles/InputComponent.css";
const InputComponent = ({
  type,
  id,
  name,
  pattern,
  placeholder,
  required,
  value,
  pLabel,
  inputTip,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="form-item">
      <label htmlFor={name}>{pLabel}</label>
      <div className="form-item-input-container">
        <input
          className="form-item_input"
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          onSelect={() => setShow(true)}
        />
        <img
          className="validation-icon"
          src={validationIcon}
          alt="Icono de validación de campo"
        />
      </div>
      <div className="toolTip-container">
        {show ? (
          <p
            className="small"
            style={{ opacity: "1", transition: "all .5s ease-in-out" }}
          >
            {inputTip}
          </p>
        ) : (
          <p
            className="small"
            style={{ opacity: "0", transition: "all .5s ease-in-out" }}
          ></p>
        )}
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string.isRequired,
  value: PropTypes.string,
  pLabel: PropTypes.string.isRequired,
  inputTip: PropTypes.string,
};

export default InputComponent;
