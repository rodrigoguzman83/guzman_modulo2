import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

function login() {
  return (
    <Container>
      <h1>Login</h1>
      <Form style={{ marginTop: "20px" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su Clave" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}

export default login;
