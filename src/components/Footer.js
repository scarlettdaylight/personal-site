import React from 'react';
import styled from 'styled-components';

import { FormattedHTMLMessage } from 'react-intl';
import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';
import Paragraph from './Atoms/Paragraph';
import FlexBox from './Atoms/FlexBox';
import theme from '../assets/styles/theme';

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
        <Paragraph fontSize={1} color={theme.color.greyish} mr={3}>
          <FormattedHTMLMessage id="footer.github" defaultMessage="GITHUB" />
        </Paragraph>
        <Paragraph fontSize={1} color={theme.color.greyish}>
          <FormattedHTMLMessage id="footer.linkedIn" defaultMessage="LINKEDIN" />
        </Paragraph>
      </FlexBox>
    </StyledFooter>
  );
};

export default Footer;
