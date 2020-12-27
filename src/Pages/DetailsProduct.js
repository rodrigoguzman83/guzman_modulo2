import React, { useState, useEffect } from "react";
import { getProducto } from "../Services/ProductsServices";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ProductoDetalle(props) {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getProducto(props.match.params.id).then((data) => {
      console.log(data);
      setProducto(data[0]);
    });
  }, []);

  return (
    <Container>
      <div>
        <div>
          <img
            src={producto.photo_url}
            alt="Girl in a jacket"
            width="400"
            height="400"
          ></img>
        </div>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <h5>${producto.price}</h5>
        <Link to={"/"}>
          <Button variant="secondary" className="mr-2">
            Volver al listado
          </Button>
        </Link>
        <Button variant="primary">Comprar</Button>
      </div>
    </Container>
  );
}

export default ProductoDetalle;
