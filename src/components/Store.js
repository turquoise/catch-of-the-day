import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './Store.css';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class Store extends Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
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

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    const order = {...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order: order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <Container>
          <Row>
            <Col sm="4" className="header">
              <Header tagline="Fresh Seafood Market"/>
              <ul className="list-of-fishes">
                {
                  Object.keys(this.state.fishes)
                    .map( fish => <Fish key={fish} index={fish} details={this.state.fishes[fish]} addToOrder={this.addToOrder}/> )
                }
              </ul>
            </Col>
            <Col sm="4" className="order">
              <Order />
            </Col>
            <Col sm="4" className="inventory">
              <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Store;
