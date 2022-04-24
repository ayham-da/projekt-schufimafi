import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import HomeLeft from "../home_left/home_left";
import HomeRight from "../home_right/home_right";


function HomeTop() {
  return (
    <Container className="home-top">
      <Row className="home-top-main">
        <Col  sm={7}  className="App-left">
          <HomeLeft />
        </Col>
        <Col  sm={5} className="App-right">
          <HomeRight />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeTop;
