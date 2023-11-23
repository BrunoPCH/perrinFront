import perrinOlfateando from "../assets/perrinOlfateando.svg";
import ButtonLink from "./ButtonLink";
const NotFound = () => {
  return (
    <div style={{ padding: "0 1rem" }}>
      <h1>Error 404 </h1>
      <img
        src={perrinOlfateando}
        alt="Dog is sniffing"
        style={{
          width: "50%",
          maxWidth: "300px",
          display: "block",
          margin: "0 auto",
        }}
      />
      <h2>
        ¡Perdiste el rastro! <br /> esta página no existe
      </h2>
      <ButtonLink to="/">Regresar a la página principal</ButtonLink>
    </div>
  );
};

export default NotFound;
