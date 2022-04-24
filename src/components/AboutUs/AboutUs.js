import React from 'react';
import './style.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import ReactTypingEffect from "react-typing-effect";
import aboutUs from "../../assets/img/aboutUs.jpg";



function AboutUs() {
  return (
    <Container className="aboutUs">
      <Row className="aboutUs-main">
        <Col  sm={12} className="aboutUs-title-top">
          <h2 className="first-line">
            <strong>SCHU FI MA FI</strong>
          </h2>
        </Col>
        <Col  sm={12} className="aboutUs-img-top">
          <Image src={aboutUs} className="aboutUs-main-img" alt="Image of aboutUs"/>
        </Col>
        <Col  sm={12}  className="aboutUs-top-info">
          <div>
            <h3>
              <ReactTypingEffect
                  text="Syrisches Kollektiv für den Austausch, Kommunikation, und die Interkulturalität."
                  className="typical"
                  speed="100"
                  eraseDelay="500000"
              />
            </h3>
            <h3>
              <ReactTypingEffect
                  text="مجموعة ثقافية سورية للتبادل والتواصل والتفاعل الثقافي"
                  className="typical"
                  speed="100"
                  eraseDelay="510000"
              />
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
