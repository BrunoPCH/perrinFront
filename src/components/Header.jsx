import { useState } from "react";
import MovilMenu from "./MovilMenu";
import "../styles/Header.css";
import logoImage from "../assets/perrinLogoHeader.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenuFn = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div className="container-header">
        <div className="container-boxed-header">
          <Link to="/">
            <img className="logo-header" src={logoImage} alt="Perrin logo" />
          </Link>
          <button className="hamburguer-button" onClick={toggleShowMenuFn}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
      <div className="">{showMenu ? <MovilMenu /> : <></>}</div>
    </div>
  );
};
export default Header;
