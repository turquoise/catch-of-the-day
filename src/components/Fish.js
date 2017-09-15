import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Badge, Row, Col, Container } from 'reactstrap';
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
          <Container>
            <Row>
              <Col xs="2">
                <img src={details.image} alt={details.name} />
              </Col>
              <Col xs="8">
                <h6 className="fish-name">{ details.name}</h6>
              </Col>
              <Col xs="2">
                <span className="price"> { formatPrice(details.price) }</span>
              </Col>
            </Row>
            <Row>
              <p>{ details.desc }</p>
            </Row>
            <Row>
              <Button onClick={ () => this.props.addToOrder(this.props.index) }
                      disabled={!isAvailable}>{ buttonText }
              </Button>
            </Row>
          </Container>
        </ListGroupItem>
      </ListGroup>

    );
  };
}

export default Fish;
