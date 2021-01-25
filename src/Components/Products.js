import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Productos(props) {
  return (
    <Card
      border="primary"
      style={{ width: "18rem", marginTop: "10px", padding: "1em" }}
    >
      <Card.Img variant="top" src={props.productos.data().image} rounded />
      <Card.Body>
        <Card.Title>{props.productos.data().nombre}</Card.Title>
        <Card.Text>${props.productos.data().precio}</Card.Text>
        <Link to={"/productos/" + props.productos.id}>
          <Button variant="primary">Ver</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Productos;
