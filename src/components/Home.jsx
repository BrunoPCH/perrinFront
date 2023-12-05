import Logo from "./Logo.jsx";
import BookingButton from "./BookingButton.jsx";

const Home = () => {
  return (
    <div
      style={{
        padding: "0 1rem",
        minHeight: "calc(100vh - 268px)",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        justifyItems: "center",
        alignSelf: "center",
      }}
    >
      <Logo />
      <BookingButton to={"/login"}>Reservar</BookingButton>
    </div>
  );
};

export default Home;
