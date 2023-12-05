import { Link } from "react-router-dom";
import "../styles/MovilMenu.css";
import PropTypes from "prop-types";

const rutes = [
  { page: "Home", path: "/", id: 1 },
  { page: "Login", path: "/login", id: 4 },
  { page: "Registrar", path: "/register", id: 2 },
  { page: "Registrar Perrin", path: "/register-dog", id: 3 },
  { page: "Dashboard", path: "/dashboard", id: 4 },
];
const MovilMenu = (props) => {
  const ruteItems = rutes.map((rute) => (
    <Link
      key={rute.id}
      className="movilmenu-item"
      to={rute.path}
      onClick={() => props.setShowMenu(false)}
      // onClick={toggleShowMenuFn}
    >
      {rute.page}
    </Link>
  ));

  return (
    <div className="movilmenu-container">
      <div className="movilmenu-header"></div>
      <div className="movilemenu-content">{ruteItems}</div>
    </div>
  );
};
MovilMenu.protoTypes = {
  setShowMenu: PropTypes.element,
};
export default MovilMenu;
