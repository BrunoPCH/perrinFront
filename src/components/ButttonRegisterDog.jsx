import { Link } from "react-router-dom";
import "../styles/ButtonRegisterDog.css";

const ButtonRegisterDog = () => {
  return (
    <Link className="button-register-dog" to="/register-dog">
      <button>+</button>
    </Link>
  );
};
export default ButtonRegisterDog;
