import { useState } from "react";

import validationIcon from "../assets/validationIcon.svg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      username: username,
      fullName: fullName,
      email: email,
      password: password,
    };
    console.log("Clicked");
    fetch("https://perrin-api2.onrender.com/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <h1>Registro</h1>
      <h2>Llena los campos correctamente</h2>
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
          <label htmlFor="fullName">Nombre completo*</label>
          <div className="form-item-input-container">
            <input
              className="form-item_input"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="DougBerto Can Azuelos"
              required
              pattern="[a-zA-Z áÁéÉíÍóÓúÚüÜ]{8,50}"
              maxLength="50"
              autoComplete="true"
              onSelect={() => setShow(true)}
              onChange={(e) => setFullname(e.target.value)}
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
                Sólo letras y espacios
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
          <label htmlFor="email">Correo electrónico*</label>
          <div className="form-item-input-container">
            <input
              className="form-item_input"
              type="email"
              id="email"
              name="email"
              placeholder="dougBerto712@gouf.com"
              required
              maxLength="50"
              autoComplete="true"
              onSelect={() => setShow(true)}
              onChange={(e) => setEmail(e.target.value)}
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
                Dirección de correo real
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
        <div className="form-item">
          <label htmlFor="confirmPassword">Confirma Contraseña*</label>
          <div className="form-item-input-container">
            <input
              className="form-item_input"
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Secreto12245678"
              required
              pattern={"\\w{8,20}"}
              maxLength="20"
              minLength="8"
              autoComplete="true"
              onSelect={
                password.value === confirmPassword.value
                  ? () => setShow(true)
                  : ""
              }
              onChange={(e) => setConfirmPassword(e.target.value)}
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

        <button type="submit">Crear cuenta perrona</button>
      </form>
    </div>
  );
};

export default Register;
