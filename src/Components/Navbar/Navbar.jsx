import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link, Navigate  } from "react-router-dom";

export default function Navbar({logout}) {

 
  let usertoken = localStorage.getItem("token")
  
  
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5 fixed-top mb-5">
        <Link className="navbar-brand pe-5" to="/">
          <img className="" width={70} src={logo} alt="" /> Game Over
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          {usertoken ? (
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="all">
                  All
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Platforms
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="platforms/pc">
                    Pc
                  </Link>
                  <Link className="dropdown-item" to="platforms/browser">
                    Browser
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort-by
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="Sort-by/release-date">
                    Release-date
                  </Link>
                  <Link className="dropdown-item" to="Sort-by/popularity">
                    Popularity
                  </Link>
                  <Link className="dropdown-item" to="Sort-by/alphabetical">
                    Alphabetical
                  </Link>
                  <Link className="dropdown-item" to="Sort-by/relevance">
                    Relevance
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="Categories/racing">
                    Racing
                  </Link>
                  <Link className="dropdown-item" to="Categories/sports">
                    Sports
                  </Link>
                  <Link className="dropdown-item" to="Categories/social">
                    Social
                  </Link>
                  <Link className="dropdown-item" to="Categories/shotter">
                    Shotter
                  </Link>
                  <Link className="dropdown-item" to="Categories/open-world">
                    Open-world
                  </Link>
                  <Link className="dropdown-item" to="Categories/zombie">
                    Zombie
                  </Link>
                  <Link className="dropdown-item" to="Categories/fantasy">
                    Fantasy
                  </Link>
                  <Link className="dropdown-item" to="Categories/action-rpg">
                    Action-rpg
                  </Link>
                  <Link className="dropdown-item" to="Categories/action">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="Categories/fight">
                    Fight
                  </Link>
                  <Link className="dropdown-item" to="Categories/battle-royale">
                    Battle-Royale
                  </Link>
                </div>
              </li>
            </ul>
          ) : null}
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {usertoken ? (
              <li className="nav-item">
                <span onClick={logout} className="nav-link pointer">
                  Logout
                </span>
              </li>
            ) : (
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="register">
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
