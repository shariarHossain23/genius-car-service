import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo-black.png';

const Header = () => {
  return (
      <>
        <Navbar bg="primary" variant="dark" className="sticky-top">
          <Container>
            <Navbar.Brand href="#home">
                <img height={'30px'} src={logo} alt="" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>

  );
};

export default Header;
