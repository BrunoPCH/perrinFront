// import { useState } from "react";
import InputComponent from "./InputComponent";

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [fullName, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const handleInputChange = (e) => {
  //   console.log(username, fullName, email, password, confirmPassword);
  //   const { id, value } = e.target;
  //   if (id === "username") {
  //     setUsername(value);
  //   }
  //   if (id === "fullName") {
  //     setFullname(value);
  //   }
  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  //   if (id === "confirmPassword") {
  //     setConfirmPassword(value);
  //   }
  // };

  function handleSubmit(e) {
    // Previene que el navegador recargue la página
    e.preventDefault();

    // Lee los datos del formulario
    const form = e.target;
    const formData = new FormData(form);

    // Puedes pasar formData como el cuerpo de la consulta directamente:
    fetch("https://perrin-api2.onrender.com/users", {
      method: form.method,
      body: JSON.stringify(formData),
      mode: "no-cors",
    });

    // O puedes trabajar con él como un objecto plano:
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
  }

  // const handleSubmit2 = () => {
  //   console.log(username, fullName, email, password, confirmPassword);

  //   let obj = {
  //     username: username,
  //     fullName: fullName,
  //     email: email,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //   };
  //   console.log(obj.json());
  // };
  return (
    <div>
      <h1>Registro</h1>
      <h2>Llena los campos correctamete</h2>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="formulario_registro_usuario"
      >
        <InputComponent
          pLabel={"Usuario*"}
          type={"text"}
          name={"username"}
          required={"required"}
          placeholder={"DoguiHouser"}
          pattern={"^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"}
          inputTip={"No debe de llevar espacios"}
          // onChange={(e) => handleInputChange(e)}
          id="username"
        />
        <InputComponent
          pLabel={"Nombre completo*"}
          type={"text"}
          name={"fullName"}
          required={"required"}
          pattern={"[a-zA-Z áÁéÉíÍóÓúÚüÜ]{8,50}"}
          maxLength={50}
          placeholder={"DougBerto Can Azuelos"}
          inputTip={"Sólo letras y espacios"}
          // onChange={(e) => handleInputChange(e)}
          id="fullName"
        />
        <InputComponent
          pLabel={"Correo electrónico*"}
          type={"email"}
          name={"email"}
          required={"required"}
          placeholder={"DougBerto712@gouf.com"}
          inputTip={"Dirección de correo real"}
          // onChange={(e) => handleInputChange(e)}
          id="email"
        />
        <InputComponent
          pLabel={"Contraseña"}
          type={"text"}
          name={"password"}
          required={"required"}
          pattern={"\\w{8,20}"}
          maxLength={20}
          placeholder={"Secreto12245678"}
          inputTip={"Entre 8 y 20 caracteres sin espacios"}
          // onChange={(e) => handleInputChange(e)}
          id="password"
        />
        {/* <InputComponent
          pLabel={"Confirmar contraseña"}
          type={"text"}
          name={"confirmPassword"}
          required={"required"}
          pattern={"\\w{8,20}"}
          maxLength={20}
          placeholder={"Secreto12245678"}
          inputTip={"Entre 8 y 20 caracteres sin espacios"}
          // onChange={(e) => handleInputChange(e)}
          id="confirmPassword"
        /> */}
        {/* onClick={() => handleSubmit()} */}
        <button type="submit">Crear cuenta perrona</button>
      </form>
    </div>
  );
};

export default Register;
