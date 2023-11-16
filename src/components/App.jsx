// GENERAL ESTYLES
import "../styles/App.css";

// LIBRARIES

// React Router DOM
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

// COMPONETS
import Logo from "./Logo.jsx";
import BookingButton from "./BookingButton.jsx";

function App() {
  return (
    <>
      {/* <Header /> */}

      <div>
        <Logo />
        <BookingButton />
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
