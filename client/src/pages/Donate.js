import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";

class Donte extends Component {
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
        this.setState({
          shoes: res.data,
          // name: "",
          // image: "",
          // size: "",
          // condition: ""
        }, () => {
          console.log(this.state.shoes)
        })
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
          <Col size="md-12">
            <Jumbotron>
              <h1>Fill the form to Donte shoes</h1>
            </Jumbotron>
          </Col>
        </Row>
        <form>
          <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="name (required)"
          />
          <Input
            value={this.state.image}
            onChange={this.handleInputChange}
            name="image"
            placeholder="image (required)"
          />
          <Input
            value={this.state.size}
            onChange={this.handleInputChange}
            name="size"
            placeholder="size (required)"
          />
          <TextArea
            value={this.state.condition}
            onChange={this.handleInputChange}
            name="condition"
            placeholder="condition (required)"
          />
          <FormBtn onClick={this.handleFormSubmit}>Submit Shoes</FormBtn>
        </form>
        <Row>
          <Col size="md-2">
            <Link to="/">Back to Home Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Donte;
