import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Paragraph from './Atoms/Paragraph';
import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';
import { pageList } from '../utilis/constants';

const StyledNavbar = styled.nav`
  padding: 16px;
  height: 84px;
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

const Navbar = () => {
  const meta = useSiteMetadata();

  const [isOpened, setIsOpened] = useState(false);

  return (
    <StyledNavbar className={`navbar ${isOpened ? 'is-active' : ''}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Logo>
            S
          </Logo>
        </a>

        <a
          onClick={() => { setIsOpened(!isOpened); }}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="main-navbar" className={`navbar-menu ${isOpened ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to={pageList.game.url}>
            <Paragraph fontSize={1} pb={0}>
              <FormattedMessage id="navbar.game-list" defaultMessage="Game List" />
            </Paragraph>
          </Link>
          <a className="navbar-item" target="_blank" rel="noopener noreferrer" href={meta.linkedIn}>
            <Paragraph fontSize={1} pb={0}>
              <FormattedMessage id="navbar.linkedIn" defaultMessage="LINKEDIN" />
            </Paragraph>
          </a>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
