import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar className="custom-navbar" expand="lg" expanded={expanded}>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)} // Toggle the menu
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto links">
          <Nav.Link className="nav-link" href="#home" onClick={closeMenu}>
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="#about" onClick={closeMenu}>
            About
          </Nav.Link>
          <Nav.Link className="nav-link" href="#skills" onClick={closeMenu}>
            Skills
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            href="#certification"
            onClick={closeMenu}
          >
            Certification
          </Nav.Link>
          <Nav.Link className="nav-link" href="#projects" onClick={closeMenu}>
            Projects
          </Nav.Link>
          <Nav.Link className="nav-link" href="#contact" onClick={closeMenu}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
