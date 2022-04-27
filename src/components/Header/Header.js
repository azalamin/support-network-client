import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logos/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Donation
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Blog
              </Nav.Link>
              <button className="btn btn-primary mx-lg-4 my-3 my-lg-0">Register</button>
              <button className="btn btn-secondary">Admin</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
