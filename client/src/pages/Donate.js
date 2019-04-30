import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";
import FriendCard from "../components/shoeCard";


class Donate extends Component {
  state = {
    shoes: [],
    name: "",
    image: "",
    size: "",
    condition: ""
  };

  componentDidMount() {
    this.loadshoes();
  }

  loadshoes = () => {
    API.getallshoes()
      .then(res =>
        this.setState(
          {
            shoes: res.data,
            name: "",
            image: "",
            size: "",
            condition: ""
          },
          () => {
            console.log(this.state.shoes);
          }
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveshoes({
      name: this.state.name,
      image: this.state.image,
      size: this.state.size,
      condition: this.state.condition
    })
      .then(res => this.loadshoes())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <h2>Fill Out This Form 
          To Donate Your Shoe</h2>
        </Row>
        <Row>
          <form>
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name (required)"
            />
            <Input
              value={this.state.image}
              onChange={this.handleInputChange}
              name="image"
              placeholder="Image (required)"
            />
            <Input
              value={this.state.size}
              onChange={this.handleInputChange}
              name="size"
              placeholder="Size (required)"
            />
            <TextArea
              value={this.state.condition}
              onChange={this.handleInputChange}
              name="condition"
              placeholder="Condition (required)"
            />
            <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
          </form>
        </Row>
        <span />
        <Row>
          {this.state.shoes.map(shoes => (
            <FriendCard
              id={shoes.id}
              key={shoes.id}
              name={shoes.name}
              image={shoes.image}
              size={shoes.size}
              condition={shoes.condition}
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
export default Donate;
