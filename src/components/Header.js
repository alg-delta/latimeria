import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Латимерія</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Піци
            </NavLink>

            <NavLink to="/drinks" className="nav-link">
              Напої
            </NavLink>

            <NavLink to="/dop" className="nav-link">
              Закуски
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
