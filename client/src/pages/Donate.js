import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";

class Donte extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };


handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.title && this.state.author) {
    API.saveshoes({
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    })
      .then(res => this.loadshoes())
      .catch(err => console.log(err));
  }
};

render(){
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Fill the form to Donte shoes</h1>
          </Jumbotron>
        </Col>
      </Row>
      <form>
      <Input
        value={this.state.title}
        onChange={this.handleInputChange}
        name="title"
        placeholder="Name (required)"
      />
      <Input
        value={this.state.author}
        onChange={this.handleInputChange}
        name="author"
        placeholder="Size (required)"
      />
      <TextArea
        value={this.state.synopsis}
        onChange={this.handleInputChange}
        name="synopsis"
        placeholder="Condition (required)"
      />
      <FormBtn
        onClick={this.handleFormSubmit}
      >
        Submit Shoes
      </FormBtn>
    </form>
      <Row>
      <Col size="md-2">
        <Link to="/">Back to Home Page</Link>
      </Col>
    </Row>
    </Container>
  );
}

};

export default Donte;
