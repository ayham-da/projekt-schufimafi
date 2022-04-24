import React from 'react';
import '../Home/Home.css';
import HomeTop from '../../components/home_top/home_top';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';

function Home() {
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | SCHU FI MA FI</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="SCHU FI MA FI| Künstler" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  sm={12}  className="App-top">
                  <HomeTop/>
              </Col>
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
