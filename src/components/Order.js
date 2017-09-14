import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';
import { formatPrice } from '../helpers';
import './Order.css';

class Order extends Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if (!fish || fish.status === 'unavailable') {
      return <ListGroupItem key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available!</ListGroupItem>;
    }
    return (
      <ListGroupItem key={key}>
        <Container>
          <Row>
            <Col xs="2">
              <span>{count}lbs</span>
            </Col>
            <Col xs="8">
              <span>{fish.name}</span>
            </Col>
            <Col xs="2">
              <span className="price">{ formatPrice(count * fish.price) }</span>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce( (prev, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prev + (count * fish.price || 0);
      }
      return prev;
    }, 0);
    return (
      <div>
        <h4>Your Order</h4>
        <ListGroup>
            { orderIds.map(this.renderOrder) }
          <ListGroupItem>
              <strong>Total:</strong> {formatPrice(total)}
          </ListGroupItem>
        </ListGroup>

      </div>
    );
  }
}

export default Order;
