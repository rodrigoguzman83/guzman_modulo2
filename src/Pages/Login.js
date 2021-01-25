import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading";
import FormGroup from "../Components/Forms/FormGroup";
import AlertCustom from "../Components/AlertCustom";
import NetContext from "../Context/NetContext";

function Login() {
  const context = useContext(NetContext); //INCLUIR
  const history = useHistory();
  const [form, setForm] = useState({ email: "", password: "" });
  const [spinner, setSpinner] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const handleSubmit = (e) => {
    console.log("HandleSubmit", form);
    setSpinner(true);
    firebase.auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((data) => {
        console.log("data", data.user.email);
        setSpinner(false);
        context.loginUser(data.user.email);
        setAlert({ variant: "success", text: "Bienvenido/a" });
        history.push("/");
      })
      .catch((error) => {
        console.log("error", error);
        setSpinner(false);
        setAlert({ variant: "danger", text: error.message });
      });
    e.preventDefault();
  };
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <Card
      style={{ width: "50%", margin: " 3em auto auto auto", padding: "2em" }}
    >
      <Card.Body>
        <Card.Title>Ingresar</Card.Title>

        <Form onSubmit={handleSubmit}>
          <FormGroup
            label="Email"
            type="email"
            placeholder="Ingrese su email"
            name="email"
            value={form.email}
            change={handleChange}
          />
          <FormGroup
            label="Contraseña"
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            value={form.password}
            change={handleChange}
          />

          <ButtonWithLoading text="Ingresar" loading={spinner} />
        </Form>
        <AlertCustom variant={alert.variant} text={alert.text} />
      </Card.Body>
    </Card>
  );
}

export default Login;
