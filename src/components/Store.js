import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './Store.css';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class Store extends Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    // initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update state
    const fishes = { ...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes: fishes})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <Container>
          <Row>
            <Col sm="4" className="header">
              <Header tagline="Fresh Seafood Market"/>
            </Col>
            <Col sm="4" className="order">
              <Order />
            </Col>
            <Col sm="4" className="inventory">
              <Inventory addFish={this.addFish} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Store;
