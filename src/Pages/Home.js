import React, { Component } from "react";
import ProductoDetalle from "./DetailsProduct";
import Productos from "../Components/Products";
import { getProductos } from "../Services/ProductsServices";
import { Form, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
      loading: true,
    };
  }
  componentDidMount() {
    getProductos().then((data) => {
      console.log("Data", data);
      this.setState({
        productos: data.data,
        loading: false,
      });
    });
  }
  render() {
    if (this.state.loading) {
      return <div>Loading ...</div>;
    } else {
      return (
        <Container>
          <Form>
            <Form.Group controlId="formBasicName" style={{ marginTop: "20px" }}>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre, marca, categoria"
              />
            </Form.Group>
          </Form>
          <Row>
            {this.state.productos.map((producto) => (
              <Col xs={12} md={4}>
                <Productos productos={producto} />
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }
}

export default Home;
