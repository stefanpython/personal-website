import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="nav-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="nav-link" href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link className="nav-link" href="#certification">
            Certification
          </Nav.Link>
          <Nav.Link className="nav-link" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="nav-link" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
