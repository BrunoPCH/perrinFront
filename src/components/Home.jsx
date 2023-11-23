import Logo from "./Logo.jsx";
import BookingButton from "./BookingButton.jsx";

const Home = () => {
  return (
    <div>
      <Logo />
      <BookingButton to={"/login"}>Reservar</BookingButton>
    </div>
  );
};

export default Home;
