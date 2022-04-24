import React from 'react';
import './MyProjekt.css';
import Footer from '../../components/footer/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import ProjektItemList            from '../../components/MyProjekt/ProjektItemList'
import schufimafi from "../../assets/img/schufimafi.png"





const My_Projekt = [
    {
        id: 'p1',
        title: 'beauty in the desert',
        description: 'description',
        imageUrl: schufimafi ,
        size:"60 x 50"

    },
    {
        id: 'p1',
        title: 'Buddha',
        description: 'description',
        imageUrl: schufimafi ,
        size:"50 x 40"

    },
    {
        id: 'p1',
        title: 'Cover me',
        description: 'description',
        imageUrl: schufimafi ,
        size:"50 x 40"

    },
    {
        id: 'p1',
        title: 'free thoughts',
        description: 'description',
        imageUrl: schufimafi ,
        size:"50 x 40"

    },
    {
        id: 'p1',
        title: 'Kalam',
        description: 'description',
        imageUrl: schufimafi ,
        size:"60 x 70"

    },
    {
        id: 'p1',
        title: 'Once',
        description: 'description',
        imageUrl: schufimafi ,
        size:"40 x 30"

    },
    {
        id: 'p1',
        title: 'Roja Nû',
        description: 'description',
        imageUrl: schufimafi ,
        size:"30 x 24 -X3"

    },
    {
        id: 'p1',
        title: 'Take me',
        description: 'description',
        imageUrl: schufimafi ,
        size:"50 x 70"

    },
    {
        id: 'p1',
        title: 'Two souls from the sky',
        description: 'description',
        imageUrl: schufimafi,
        size:"40 x 30"

    },
    {
        id: 'p1',
        title: 'wosnek',
        description: 'description',
        imageUrl: schufimafi ,
        size:"100 x 140"
    },

];


function MyProjekt() {
    const loadedPlaces = My_Projekt;
    return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>SCHU FI MA FI</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="SCHU FI MA FI" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          <Container className="projekts-header" fluid={true}>
            <Row className="projekts-main">
              <Col  md={12}  className="projekts-main-List">
                  <ProjektItemList items={loadedPlaces} />
              </Col>
            </Row>
            <Row className="projekts-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default MyProjekt;
