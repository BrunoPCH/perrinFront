import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutWithoutHeader = () => {
  return (
    <div style={{}}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWithoutHeader;
