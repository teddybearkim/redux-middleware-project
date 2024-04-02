import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./route/PrivateRoute";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);



  const categories = [
    "WOMEN",
    "MEN",
    "BABY",
    "KIDS",
  ];

  useEffect(() => {
    console.log(mobileMenu);
  }, [auth, page, mobileMenu]);

  return (
    <div
      className="App"
      style={{ maxWidth: "1000px", margin: "auto", padding: "30px", position: 'relative' }}
    >
      {mobileMenu ? <MobileMenu categories={categories} setMobileMenu={setMobileMenu} /> : null}

      <Navbar auth={auth} setAuth={setAuth} setPage={setPage} categories={categories} setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />

      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;