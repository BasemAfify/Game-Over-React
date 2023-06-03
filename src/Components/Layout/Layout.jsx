import React from 'react'
import styles from "./Layout.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {

  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <Navbar logout={logout} />
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
}
