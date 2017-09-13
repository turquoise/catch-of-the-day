import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import anchor from '../css/images/anchor.svg';

const Header = (props) => {
  return (
    <div>
        <Container>
          <Row>
            <Col sm="2">
              <img src={anchor} className="img" height="40px" alt="anchor"/>
            </Col>
            <Col>
              <h2>Catch of the Day</h2>
            </Col>
          </Row>
          <Row>
            <h6 className="tagline">{ props.tagline }</h6>
          </Row>
        </Container>

    </div>
  );
};


export default Header;
