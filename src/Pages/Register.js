import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class Registro extends Component {
  render() {
    return (
      <>
        <Container>
          <h1>Nuevo Usuario</h1>
          <Form style={{ marginTop: "20px" }}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>

            <Form.Group controlId="formBasicSurname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Apellido" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su Clave" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Registro;
