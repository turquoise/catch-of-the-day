import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import './Store.css';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

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


  componentWillMount() {
    // this runs before the app is rendered.
    const path = this.context.router.history.location.pathname;
    const userId = path.slice(7);

    this.ref = base.syncState(`${userId}/fishes`,
      {
        context: this,
        state: 'fishes'
      }
    );
    // check if there is anything in localstorage.
    const localStorageRef = localStorage.getItem(`order-${userId}`);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log({nextProps, nextState});
    const path = this.context.router.history.location.pathname;
    const userId = path.slice(7);
    //console.log(userId);
    localStorage.setItem(`order-${userId}`, JSON.stringify(nextState.order));

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
              <Order fishes={this.state.fishes} order={this.state.order}/>
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

Store.contextTypes = {
  router: PropTypes.object
};

export default Store;
