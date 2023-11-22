import { useState } from "react";
import PropTypes from "prop-types";
import validationIcon from "../assets/validationIcon.svg";
import "../styles/InputComponent.css";
const InputComponent = ({
  type,
  id,
  name,
  pattern,
  maxLength,
  placeholder,
  required,
  value,
  pLabel,
  inputTip,
  autocomplete,
  // defaultValue,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="form-item">
      <label htmlFor={id}>{pLabel}</label>
      <div className="form-item-input-container">
        <input
          className="form-item_input"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          maxLength={maxLength}
          // defaultValue={defaultValue}
          autoComplete={autocomplete}
          onSelect={() => setShow(true)}
          onChange={value}
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
  // defaultValue: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  //   PropTypes.bool,
  // ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  pLabel: PropTypes.string.isRequired,
  inputTip: PropTypes.string,
  autocomplete: PropTypes.string,
  maxLength: PropTypes.number,
};

export default InputComponent;

{
  /* <InputComponent
          pLabel={"Confirmar contraseña"}
          type={"text"}
          name={"confirmPassword"}
          required={"required"}
          pattern={"\\w{8,20}"}
          maxLength={20}
          placeholder={"Secreto12245678"}
          inputTip={"Entre 8 y 20 caracteres sin espacios"}
          // onChange={(e) => handleInputChange(e)}
          id="confirmPassword"
        /> */
}
