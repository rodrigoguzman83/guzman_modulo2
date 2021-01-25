import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
import NetContext from "../../Context/NetContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const styles = {
  font: {
    color: "#FFFFFF",
  },
};

function Menu() {
  return (
    <NetContext.Consumer>
      {(context) => (
        <Navbar bg="primary" expand="lg" style={styles.font}>
          <Navbar.Brand href="#home" style={styles.font}>
            React Utn Ecommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/"} style={styles.font}>
                <FontAwesomeIcon icon={faHome} />
              </Nav.Link>
              {!context.login && (
                <>
                  <Nav.Link as={Link} to={"/registro"} style={styles.font}>
                    Registro
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/login"} style={styles.font}>
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
            <div>{context.email}</div>
            {context.login && (
              <>
                <Form inline>
                  <Nav.Link onClick={context.logoutUser} style={styles.font}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </Nav.Link>
                </Form>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      )}
    </NetContext.Consumer>
  );
}

export default Menu;
