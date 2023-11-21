import logoImage from "../assets/LogoImage-01.svg";
import logoType from "../assets/LogoType-01.svg";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <>
      <img src={logoImage} className="logo-home" alt="Perrin Logo" />
      <img src={logoType} className="logo-type" alt="Perrin Logotype" />
    </>
  );
};

export default Logo;
