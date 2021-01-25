import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading";
import FormGroup from "../Components/Forms/FormGroup";
import { useHistory } from "react-router-dom";
import AlertCustom from "../Components/AlertCustom";
import "../App.css";

function Registro() {
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const history = useHistory();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre == "") {
      setError({
        ...error,
        nombre: "El campo nombre es obligatorio",
      });
      return;
    }
    setSpinner(true);
    let email = form.email;
    let password = form.password;
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log("Usuario creado", data.user.uid);
        firebase.db
          .collection("usuarios")
          .add({
            nombre: form.nombre,
            apellido: form.apellido,
            email: form.email,
            userId: data.user.uid,
          })
          .then((data) => {
            setSpinner(false);
            console.log(data);
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
            setSpinner(false);
            setAlert({ variant: "danger", text: error.message });
          });
      })
      .catch((error) => {
        console.log("Error", error);
        setSpinner(false);
        setAlert({ variant: "danger", text: error.message });
      });
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
        <Card.Title>Registrarse</Card.Title>

        <Form onSubmit={handleSubmit}>
          <FormGroup
            label="Nombre"
            type="text"
            placeholder="Ingrese su nombre"
            name="nombre"
            value={form.nombre}
            change={handleChange}
          />
          <FormGroup
            label="Apellido"
            type="text"
            placeholder="Ingrese su apellido"
            name="apellido"
            value={form.apellido}
            change={handleChange}
          />
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

          <ButtonWithLoading text="Registrarse" loading={spinner} />
          <AlertCustom variant={alert.variant} text={alert.text} />
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Registro;
