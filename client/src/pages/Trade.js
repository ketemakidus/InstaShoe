import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import FriendCard from "../components/shoeCard";
import API from "../utils/API";
import shoes from "../shoes.json";
import "./style.css";

class Trade extends Component {
  state = {
    shoes
  };

  componentDidMount() {
    API.getshoes(this.props.match.params.id)
      .then(res => this.setState({ shoes: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Choose a shoe to Trade 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {this.state.shoes.map(shoes => (
            <FriendCard
              id={shoes.id}
              key={shoes.id}
              name={shoes.name}
              image={shoes.image}
              Size={shoes.Size}
              Condition={shoes.Condition}
            />
            ))}
        </Row>
     

        <Row>
          <Col size="md-2">
            <Link to="/">Back to Home Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Trade;


