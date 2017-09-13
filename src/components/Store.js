import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './Store.css';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Hello from './Hello';

class Store extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <Hello />
        <Container>
          <Row>
            <Col sm="4" className="header">
              <Header tagline="Fresh Seafood Market"/>
            </Col>
            <Col sm="4" className="order">
              <Order />
            </Col>
            <Col sm="4" className="inventory">
              <Inventory />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Store;
