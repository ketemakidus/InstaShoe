import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";


class shoes extends Component {
  state = {
    shoes: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadshoes();
  };

  loadshoes = () => {
    API.getshoes()
      .then(res =>
        this.setState({ shoes: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteshoes = id => {
    API.deleteshoes(id)
      .then(res => this.loadshoes())
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
               <h1>Whould you like to  do??</h1>
            </Jumbotron>
                      </Col>
        </Row>
        <Link style={{ float: "left"}} to="/Trade/:id"> Trade</Link>
        <Link  style={{ float: "right"}} to="/donate">  Donate</Link>
      </Container>
    );
  }
}

export default shoes;
