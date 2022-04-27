import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <div className="container">
        <h1 className="text-center mt-3 text-uppercase">
          No one has ever become poor by giving
        </h1>
        <form className="input-group mb-3 search-form mx-auto  mt-md-4">
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
