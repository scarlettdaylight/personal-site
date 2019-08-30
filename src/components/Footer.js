import React from 'react';
import styled from 'styled-components';

import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';
import Paragraph from './Atoms/Paragraph';
import FlexBox from './Atoms/FlexBox';

const StyledFooter = styled.footer`
  font-size: 14px;
  text-align: right;
  padding: 8px 24px;
  width: 100%;
  background: ${props => props.theme.color.lightGray};
  display: flex;
`;

const Footer = () => {
  const meta = useSiteMetadata();

  return (
    <StyledFooter>
      <FlexBox>
        <Paragraph fontSize={1}>
      © {new Date().getFullYear()}, {meta.author}
        </Paragraph>
      </FlexBox>
      <FlexBox ml="auto">
        <Paragraph>
          LINKEDIN
        </Paragraph>
      </FlexBox>
    </StyledFooter>
  );
};

export default Footer;
