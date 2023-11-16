import React from "react";
import logoImage from "../assets/perrinLogoFinal.svg";
import "../styles/Logo.css";

console.log(logoImage); // /logo.84287d09.png

function Logo() {
  return (
    <img
      src={logoImage}
      className="logo-home"
      alt="Perrin Logo"
      style={{ width: "100%" }}
    />
  );
}

export default Logo;
