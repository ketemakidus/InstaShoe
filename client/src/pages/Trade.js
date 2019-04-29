import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
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
