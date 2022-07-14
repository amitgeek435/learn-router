import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <NavLink to="/" className="navbar-brand header-link">
          Home
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-sub-link">
            <NavLink to="/about" className="header-link pr-3">
              About
            </NavLink>
            <NavLink to="/contact" className="header-link pr-3">
              Contact
            </NavLink>
            <NavLink to="/service" className="header-link pr-3">
              Service
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
