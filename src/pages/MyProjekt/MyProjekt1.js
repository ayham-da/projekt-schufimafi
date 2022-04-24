import React                     from 'react';

import book1  from '../../assets/booksImg/b1.png'
import book2  from '../../assets/booksImg/b2.png'

import { Container, Row, Col} from 'react-bootstrap';
import UserPlacesList            from '../../components/MyProjekt/ProjektItemList'
import Footer from '../../components/footer/footer';
import './/MyProjekt.css';

import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import {Helmet} from 'react-helmet';


const My_Projekt = [
    {
      id: 'p1',
      title: 'Volksgarten',
      description: 'One of the most famous garden in Düsseldorf!',
      imageUrl: book1 ,
      creator: 'Samer Alnajjar'
    },
    {
      id: 'p2',
      title: 'Volksgarten',
      description: 'One of the most famous garden in Düsseldorf!',
      imageUrl: book2 ,
      creator: 'Samer Alnajjar'
    }
  ];

const UserPlaces = () => {
    const loaded_Projekt = My_Projekt
    return (
        <Page loader={"bar"} color={"white"} size={9} duration={1}>
        <Helmet>
                 <meta charSet="utf-8" />
                 <title>SCHU FI MA FI</title>
                 <link rel="canonical" href="#" />
                 <meta name="description" content="SCHU FI MA FI" />
        </Helmet>

        </Page>
        )}
export default UserPlaces;