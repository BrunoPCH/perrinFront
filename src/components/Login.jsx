import { useState } from "react";

import "../styles/Login.css";
import ButtonLink from "./ButtonLink";
import validationIcon from "../assets/validationIcon.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      username: username,
      password: password,
    };
    console.log("Clicked");
    fetch("https://perrin-api2.onrender.com/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        console.log(localStorage);
      });
  }

  return (
    <div style={{ padding: "0 1rem" }}>
      <h1>Inicia sesión</h1>
      <h2>
        Ingresa con tu cuenta <em>Perrona</em>
      </h2>

      <form onSubmit={handleForm} className="formulario_registro_usuario">
        <div className="form-item">
          <label htmlFor="username">Usuario*</label>
          <div className="form-item-input-container">
            <input
              className="form-item_input"
              type="text"
              id="username"
              name="username"
              placeholder="DoguiHouser"
              required
              pattern="^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
              maxLength="50"
              autoComplete="true"
              onSelect={() => setShow(true)}
              onChange={(e) => setUsername(e.target.value)}
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
                No debe de llevar espacios
              </p>
            ) : (
              <p
                className="small"
                style={{ opacity: "0", transition: "all .5s ease-in-out" }}
              ></p>
            )}
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="password">Contraseña*</label>
          <div className="form-item-input-container">
            <input
              className="form-item_input"
              type="text"
              id="password"
              name="password"
              placeholder="Secreto12245678"
              required
              pattern={"\\w{8,20}"}
              maxLength="20"
              minLength="8"
              autoComplete="true"
              onSelect={() => setShow(true)}
              onChange={(e) => setPassword(e.target.value)}
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
                Entre 8 y 20 caracteres sin espacios{" "}
              </p>
            ) : (
              <p
                className="small"
                style={{ opacity: "0", transition: "all .5s ease-in-out" }}
              ></p>
            )}
          </div>
        </div>

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
    </div>
  );
};
export default Login;
