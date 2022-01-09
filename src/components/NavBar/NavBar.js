import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => (
  <nav className={styles.NavBar}>
    {/* <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand>Lukas Gaspar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <h1>Lukas Gaspar</h1>
    <ul className="navigation">
      <li>
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="#skills" className="nav-link">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="nav-link">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
    <button className="burger-menu" id="burger-menu">
      <MenuIcon />
    </button>
  </nav>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
