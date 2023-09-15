import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
`;

const NavbarLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

class NavbarComponent extends Component {
  render() {
    return (
      <Router>
        <Navbar>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarComponent;

