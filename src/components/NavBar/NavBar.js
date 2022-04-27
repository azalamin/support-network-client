import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import logo from "../../logos/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogOut = async () => {
    await signOut(auth);
    toast("Successfully Logout");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/addEvent">
                Donation
              </Nav.Link>
              <Nav.Link as={Link} to="/booking">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Blog
              </Nav.Link>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-primary mx-lg-3 my-3 my-lg-0"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/supporterList")}
                className="btn btn-success me-lg-3 me-0 mb-3 mb-lg-0"
              >
                Admin
              </button>
              {user && (
                <button onClick={handleLogOut} className="btn btn-secondary">
                  Logout
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
