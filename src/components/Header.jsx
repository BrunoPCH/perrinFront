import "../styles/Header.css"
import logoImage from "../assets/perrinLogoHeader.svg";

const Header = () => {
    return (
        <div className="container-header">
            <img className="logo-header" src={logoImage} alt="Perrin logo" />
            <button>=</button>
        </div>
    )
}
export default Header;