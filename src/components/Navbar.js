import React from 'react';
import styled from 'styled-components';
import Paragraph from './Atoms/Paragraph';

const StyledNavbar = styled.nav`
  height: 4rem;
  margin: 16px;
  text-transform: uppercase;
`;

const Navbar = () => (
  <StyledNavbar className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        Scarlett
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="main-navbar" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item">
          <Paragraph pb={0} fontSize={1}>
          About
          </Paragraph>
        </a>
        <a className="navbar-item">
          <Paragraph pb={0} fontSize={1}>
          Contact
          </Paragraph>
        </a>
      </div>
    </div>
  </StyledNavbar>
);

export default Navbar;
