import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";

class shoes extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Would you like to do?</h1>
              <Link className="Trade" to="/Trade/:id">
                {" "}
                Trade
              </Link>
              <Link className="Donate" to="/donate">
                {" "}
                Donate
              </Link>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default shoes;
