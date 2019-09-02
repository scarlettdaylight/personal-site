import React from 'react';
import styled from 'styled-components';

import { FormattedHTMLMessage } from 'react-intl';
import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';
import Paragraph from './Atoms/Paragraph';
import FlexBox from './Atoms/FlexBox';

const StyledFooter = styled.footer`
  font-size: 14px;
  text-align: right;
  padding: 8px 24px;
  width: 100%;
  background: ${props => props.theme.color.lightGray};
  color: ${props => props.theme.color.gray};
  display: flex;
  a {
    color: ${props => props.theme.color.gray};
  }
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
        <a target="_blank" rel="noopener noreferrer" href={meta.gitlab}>
          <Paragraph fontSize={1} mr={3}>
            <FormattedHTMLMessage id="footer.gitlab" defaultMessage="GITLAB" />
          </Paragraph>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={meta.linkedIn}>
          <Paragraph fontSize={1}>
            <FormattedHTMLMessage id="footer.linkedIn" defaultMessage="LINKEDIN" />
          </Paragraph>
        </a>
      </FlexBox>
    </StyledFooter>
  );
};

export default Footer;
