import React from 'react';
import '../home_right/style.css';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import schufimafi from '../../assets/img/schufimafi.png'
import SocialIcons from '../social_icons';

function HomeRight() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col sm={12} className="home-right-main-col">
          <Image src={schufimafi} className="home-right-main-img" alt="Image of SCHU FI MA FI"/>
        </Col>
        <Row className="home-right-footer" >
          <SocialIcons />
        </Row>
      </Row>
    </Container>
  );
}

export default HomeRight;
