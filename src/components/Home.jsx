import Logo from "./Logo.jsx";
import BookingButton from "./BookingButton.jsx";

const Home = () => {
  return (
    <div style={{ padding: "0 1rem" }}>
      <Logo />
      <BookingButton to={"/login"}>Reservar</BookingButton>
    </div>
  );
};

export default Home;
