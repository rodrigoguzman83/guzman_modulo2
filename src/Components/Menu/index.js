import React from "react";
import OptionMenu from "./OptionMenu";
import { Navbar, Nav } from "react-bootstrap";

function Menu(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Trabajo practico 2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {props.data.map((opcion) => (
              <OptionMenu opcion={opcion} className="justify-content-end" />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
