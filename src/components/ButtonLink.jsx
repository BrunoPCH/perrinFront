import { Link } from "react-router-dom";
import "../styles/ButtonLink.css";

function ButtonLink({ to, children }) {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
}

export default ButtonLink;
