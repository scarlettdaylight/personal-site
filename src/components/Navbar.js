import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Paragraph from './Atoms/Paragraph';
import Box from './Atoms/Box';

const StyledNavbar = styled.nav`
  height: 4rem;
  margin: 16px;
  text-transform: uppercase;
`;

const Logo = styled.div` 
  display: block;
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, rgb(203, 53, 107), rgb(189, 63, 50));
  border-radius: 2048px;
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 700;
  text-align: center;
  line-height: 32px;
  color: ${props => props.theme.color.white};
  &:hover {
    text-decoration: none;
  }
`;

const Navbar = () => (
  <StyledNavbar className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <Logo>
        S
        </Logo>
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
            <FormattedMessage id="navbar.contact" defaultMessage="Contact" />
          </Paragraph>
        </a>
      </div>
    </div>
  </StyledNavbar>
);

export default Navbar;
