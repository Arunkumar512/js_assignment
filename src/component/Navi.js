import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Button from 'react-bootstrap/Button';

function Navi() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Campaings</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Work">Work</Nav.Link>
            <Nav.Link href="#Market">Market</Nav.Link>
          <Button variant="light">+New Campaign</Button>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navi;