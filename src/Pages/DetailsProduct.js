import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import firebase from "../Config/firebase";

const div = {
  borderRadius: "10px",
  marginTop: "2em",
  padding: "2em",
  border: "5px solid #000",
};

const img = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "2em",
  width: "50%",
};

function ProductoDetalle(props) {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    firebase.db
      .doc("productos/" + props.match.params.id)
      .get()
      .then((doc) => {
        console.log("result", doc.data());
        setProducto(doc.data());
      });
  }, []);
  return (
    <Container>
      <div style={div}>
        <div>
          <img
            style={img}
            src={producto.image}
            alt="Girl in a jacket"
            width="400"
            height="400"
          ></img>
        </div>
        <h2>{producto.nombre}</h2>
        <h4>{producto.sku}</h4>
        <p>{producto.descripcion}</p>
        <h5>${producto.precio}</h5>
        <Link to={"/"}>
          <Button variant="secondary" className="mr-2">
            Volver al listado
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default ProductoDetalle;
