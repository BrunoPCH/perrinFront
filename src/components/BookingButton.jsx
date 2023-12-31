import { Link } from "react-router-dom";

const BookingButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};

export default BookingButton;
