import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
function OptionMenu(props) {
  const { opcion } = props;

  return (
    <Nav.Link as={Link} to={opcion.path}>
      {opcion.label}
    </Nav.Link>
  );
}

export default OptionMenu;