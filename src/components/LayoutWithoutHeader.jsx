import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutWithoutHeader = () => {
  return (
    <div className="flex-center">
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWithoutHeader;
