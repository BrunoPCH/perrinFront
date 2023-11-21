import InputComponent from "./InputComponent";
import "../styles/Login.css";
import ButtonLink from "./ButtonLink";

const Login = () => {
  return (
    <>
      <h1>Inicia sesión</h1>
      <h2>
        Ingresa con tu cuenta <em>Perrona</em>
      </h2>
      <form action="" id="" className="formulario_registro">
        <InputComponent
          pLabel={"Usuario*"}
          type={"text"}
          name={"username"}
          required={"required"}
          placeholder={"DoguiHouser"}
          pattern={"^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"}
        />
        <InputComponent
          pLabel={"Contraseña*"}
          type={"password"}
          name={"password"}
          pattern={"\\w{8,20}"}
          required={"required"}
          placeholder={""}
          inputTip={"8 carácteres alfanuméricos"}
        />
        <button type="submit" className="primaryBtn">
          Iniciar sesión
        </button>
      </form>
      <h2>¡Aún no te has registrado?</h2>
      <h3>
        Para poder reservar necesitas una cuenta perrona <br></br>y dar de alta
        a tus perrines
      </h3>
      <ButtonLink to="/register">Crear cuenta perrona</ButtonLink>
    </>
  );
};
export default Login;
