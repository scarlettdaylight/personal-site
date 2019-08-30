import React from 'react';
import styled from 'styled-components';

import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';

const StyledFooter = styled.footer`
  font-size: 14px;
  text-align: right;
  padding: 16px;
  width: 100%;
  background: ${props => props.theme.color.black80};
  color: white;
`;

const Footer = () => {
  const meta = useSiteMetadata();

  return (
    <StyledFooter>
      © {new Date().getFullYear()}, {meta.author}
    </StyledFooter>
  );
};

export default Footer;
