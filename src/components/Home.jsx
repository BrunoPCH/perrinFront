import Logo from "./Logo.jsx";
import BookingButton from "./BookingButton.jsx";

const Home = () => {
  return (
    <div>
      <Logo />
      <BookingButton to={"/login"} children={"Reservar"} />
    </div>
  );
};

export default Home;
