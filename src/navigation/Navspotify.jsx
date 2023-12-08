import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../styles/navspotify.css';
import logo from '../assets/logo.png';

const Navspotify = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="160"
          height="50"
          
          className="d-inline-block align-top"
          alt="Spotify Logo"
          
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className="nav1" href="#premium">Premium</Nav.Link>
          <Nav.Link className="nav2" href="#help">Support</Nav.Link>
          <Nav.Link className="nav3" href="#download">Download</Nav.Link>
          <Nav.Link className="nav3" href="#download">|</Nav.Link>
          <Nav.Link className="nav4" href="#help">SIgn up</Nav.Link>
          <Nav.Link className="nav5" href="#download">Log in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navspotify;
