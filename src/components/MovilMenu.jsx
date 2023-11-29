import { Link } from "react-router-dom";
import "../styles/MovilMenu.css";

const rutes = [
  { page: "Home", path: "/", id: 1 },
  { page: "Login", path: "/login", id: 4 },
  { page: "Registrar", path: "/register", id: 2 },
  { page: "Registrar Perrin", path: "/register-dog", id: 3 },
];
const MovilMenu = () => {
  const ruteItems = rutes.map((rute) => (
    <Link
      key={rute.id}
      className="movilmenu-item"
      to={rute.path}
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

export default MovilMenu;
