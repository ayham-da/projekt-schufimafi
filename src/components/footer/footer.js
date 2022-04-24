import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col sm={12}>
        Copyright © 2018-{(new Date().getFullYear())} <strong>ِAyham Da</strong>,  <small>V2.3</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
