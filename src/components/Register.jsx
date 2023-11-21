import InputComponent from "./InputComponent";

const Register = () => {
  return (
    <div>
      <h1>Registro</h1>
      <h2>Llena los campos correctamete</h2>
      <form action="" className="formulario_registro_usuario">
        <InputComponent
          pLabel={"Usuario*"}
          type={"text"}
          name={"username"}
          required={"required"}
          placeholder={"DoguiHouser"}
          pattern={"^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"}
          inputTip={"No debe de llevar espacios"}
        />
        <InputComponent
          pLabel={"Nombre completo*"}
          type={"text"}
          name={"fullName"}
          required={"required"}
          placeholder={"DougBerto Can Azuelos"}
          inputTip={"Sólo letras y espacios"}
        />
        <InputComponent
          pLabel={"Correo electrónico*"}
          type={"email"}
          name={"email"}
          required={"required"}
          placeholder={"DougBerto712@gouf.com"}
          inputTip={"Dirección de correo real"}
        />
        <InputComponent
          pLabel={"Contraseña"}
          type={"text"}
          name={"password"}
          required={"required"}
          pattern={"\\w{8,20}"}
          placeholder={"Secreto12245678"}
          inputTip={"Entre 8 y 20 caracteres sin espacios"}
        />
        <button>Crear cuenta perrona</button>
      </form>
    </div>
  );
};

export default Register;
