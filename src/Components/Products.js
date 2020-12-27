import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Productos(props) {
  return (
    <Card border="primary" style={{ width: "18rem", marginTop: "10px" }}>
      <Card.Img variant="top" src={props.productos.photo_url} rounded />
      <Card.Body>
        <Card.Title>{props.productos.name}</Card.Title>
        <Card.Text>${props.productos.price}</Card.Text>
        <Link to={"/productos/" + props.productos.id}>
          <Button variant="primary">Ver</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Productos;
