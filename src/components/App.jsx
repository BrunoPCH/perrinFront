// GENERAL ESTYLES
import "../styles/App.css";

// LIBRARIES

// React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONETS
// import Header from "../components/Header.jsx";
import LayoutWithHeader from "./LayoutWithHeader.jsx";
import LayoutWithoutHeader from "./LayoutWithoutHeader.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import NotFound from "./NotFound.jsx";
import Register from "./Register.jsx";
import RegisterDog from "./RegisterDog.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithoutHeader />}>
          <Route path="/" exact element={<Home />} />
          {/* PARA EFECTOS DE EXPOSICION SE QUITARON */}
          {/* <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} /> */}
        </Route>
        <Route element={<LayoutWithHeader />}>
          <Route path="/register-dog" element={<RegisterDog />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
