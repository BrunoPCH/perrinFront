import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // ⚠️ verify it's the correct path

const LayoutWithHeader = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: "0",
        padding: "0",
        flexGrow: "1",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWithHeader;
