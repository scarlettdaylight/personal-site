import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  height: 4rem;
  margin: 16px;
`

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
          About
        </a>
        <a className="navbar-item">
          Contact
        </a>
      </div>
    </div>
  </StyledNavbar>
);

export default Navbar;
