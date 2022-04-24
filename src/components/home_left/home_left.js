import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function HomeLeft() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col sm={12} className="home-left-main-col">
         <h2 className="first-line">
          <strong>SCHU FI MA FI</strong>
         </h2>
         <h3>
            <ReactTypingEffect
                text="Syrian Cultural Collective based in Düsseldorf"
                className="typical"
                speed="100"
                eraseDelay="500000"
            />
            <ReactTypingEffect
                text="Music . Art . Literature . Politics . Community"
                className="typical"
                speed="100"
                eraseDelay="500000"
             />
         </h3>

         <br />
         <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/überuns" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Über uns</Link></Button> &nbsp;
         <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/kontakt" style={{ textDecoration: 'none', color: 'white' }}  className="home-left-aboutme">Kontakt</Link></Button>
       </Col>
     </Row>
   </Container>
  );
}

export default HomeLeft;
