import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavigationBar() {
  return (
    <>
      <Wrapper>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src="/images/logo.png" alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto menu-ul">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link class="menu-list" href="features">
                  Features
                </Nav.Link>
                <Nav.Link class="menu-list" href="classes">
                  Classes
                </Nav.Link>
                <Nav.Link class="menu-list" href="schedule">
                  Schedule
                </Nav.Link>
                <Nav.Link class="menu-list" href="about">
                  About
                </Nav.Link>
                <Nav.Link class="menu-list" href="store">
                  Store
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  Navbar {
    background: red !important;
  }
  img {
    width: 80px;
  }
  .nav-link {
    color: var(--font-color);
    font-size: var(--menulist-size);

    &:hover {
      color: white !important;
    }
  }
`;
const Wrapper2 = styled(Wrapper)`
  border-bottom: 2px solid var(--font-color);
`;
export default NavigationBar;
