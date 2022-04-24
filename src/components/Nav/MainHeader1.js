import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainHeader1.css';
import { List } from 'react-bootstrap-icons';

const MainHeader = props => {
  const { location } = props;

  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false)


  return (
    <>
      <Navbar variant="light" expand="lg" sticky="top"
        className="navbar1 navbar-fixed-top" activeKey={location}
        expanded={expanded}
      >
        <Navbar.Brand className="navbar-brand1" exact href="/" eventKey="/" >
          <span className="navbar-brand-Text ml-1">SCHU FI MA FI</span>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          className="text-light"
          bg="light"
        >
          <List className="text-light" size={40} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={location} className="nav-link">
            <Nav.Link style={{ display: "flex", justifyContent: "center" }} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/events">Events</Nav.Link>
            <Nav.Link style={{ display: "flex", justifyContent: "center",}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/jornalist">Jornalist</Nav.Link>
            <Nav.Link style={{ display: "flex", justifyContent: "center" }} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/gallery">Gallery</Nav.Link>
            <Nav.Link style={{ display: "flex", justifyContent: "center" }} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/überuns">Über uns</Nav.Link>
            <Nav.Link style={{ display: "flex", justifyContent: "center" }} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/kontakt">Kontakt</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default MainHeader
// export default Toolbar;
