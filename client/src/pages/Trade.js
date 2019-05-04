import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import FriendCard from "../components/shoeCard";
import shoes from "../shoes.json";
import "./style.css";
import FormDialog from "../components/modalform"

class Trade extends Component {
  state = {
    shoes
  };


  render() {
    return (
      <Container fluid>
       <FormDialog />
        <Row>
          {this.state.shoes.map(shoes => (
            <FriendCard
              id={shoes.id}
              key={shoes.id}
              name={shoes.name}
              image={shoes.image}
              size={shoes.Size}
              condition={shoes.Condition}
            />
          ))}
        </Row>

        <Row>
          <Col size="md-2">
            <Link className="Home" to="/">
              Home
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Trade;
