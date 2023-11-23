import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // ⚠️ verify it's the correct path

const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet style={{ padding: "0 1rem" }} />
      <Footer />
    </>
  );
};

export default LayoutWithHeader;
