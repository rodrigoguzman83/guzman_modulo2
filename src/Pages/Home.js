import React, { Component } from "react";
import Productos from "../Components/Products";
import { Container, Spinner } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import firebase from "../Config/firebase";

const row = {
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  marginBottom: "1em",
  padding: "0.5em",
};
class Home extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
      loading: true,
    };
  }

  componentDidMount() {
    firebase.db
      .collection("productos")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs);
        this.setState({
          productos: querySnapshot.docs,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <div style={{ position: "fixed", top: "50%", left: "50%" }}>
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
          </div>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row style={row}>
            {this.state.productos.map((producto) => (
              <Col>
                <Productos key={producto.id} productos={producto} />
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
  }
}

export default Home;
