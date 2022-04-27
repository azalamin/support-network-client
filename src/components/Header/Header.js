import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </Link>
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item mx-3">
                <button className="btn btn-primary">Register</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-secondary">Admin</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="text-center mt-3 text-uppercase">
          No one has ever become poor by giving
        </h1>
        <form className="input-group mb-3 w-50 mx-auto  mt-md-4">
          <input
            type="text"
            className="form-control search-field"
            placeholder="Search....."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-primary px-4"
            type="submit"
            id="button-addon2"
          >
            Button
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
