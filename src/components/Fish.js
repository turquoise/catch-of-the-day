import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap';
import { formatPrice } from '../helpers';
import './Fish.css';

class Fish extends Component {
  render() {
    const details = this.props.details;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
    return (
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          <Row>
            <Col xs="2">
              <img src={details.image} alt={details.name} />
            </Col>
            <Col xs="10">
              <h6 className="fish-name">{ details.name } -
                <span className="price"> { formatPrice(details.price) }</span>
              </h6>
            </Col>
          </Row>
          <Row>
            <p>{ details.desc }</p>
          </Row>
          <Row>
            <Button onClick={ () => this.props.addToOrder(this.props.index) } disabled={!isAvailable}>{ buttonText }</Button>
          </Row>

        </ListGroupItem>
      </ListGroup>

    );
  };
}

export default Fish;
