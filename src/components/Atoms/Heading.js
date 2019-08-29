import React from 'react';
import styled, { css } from 'styled-components';
import {
  borderBottom,
  color,
  fontSize,
  fontWeight,
  space,
  textAlign,
  width,
  lineHeight,
  display,
  compose,
} from 'styled-system';

export const Headline = styled.h1`
  font-family: 'Red Hat Text', 'Source Sans Pro', sans-serif;
  font-size: 40px;
  font-weight: normal;
  margin: 0;
  text-align: inherit;
  line-height: 1.2;
  color: ${props => props.theme.color.green};
  
  ${props => props.uppercase
    && css`
      text-transform: uppercase;
    `}
  
  ${compose(
    space,
    width,
    fontSize,
    color,
    textAlign,
    fontWeight,
    borderBottom,
    lineHeight,
    display,
  )}
`;

const AsH1 = Headline.withComponent('h1');
const AsH2 = Headline.withComponent('h2');
const AsH3 = Headline.withComponent('h3');
const AsH4 = Headline.withComponent('h4');

const Heading = ({
  children, uppercase, h, ...props
}) => {
  switch (h) {
    case 2:
      return (
        <AsH2 fontSize={[2]} pb={[3, 3, 4]} uppercase={uppercase} {...props}>
          {children}
        </AsH2>
      );
    case 3:
      return (
        <AsH3
          fontSize={[2]}
          pb={[2, 2, 3]}
          uppercase={uppercase}
          {...props}
        >
          {children}
        </AsH3>
      );
    case 4:
      return (
        <AsH4 fontSize={[1]} pb={[1, 1, 2]} uppercase={uppercase} {...props}>
          {children}
        </AsH4>
      );
    default:
      return (
        <AsH1 fontSize={[5, 5, 5, 6]} pb={[2, 2, 3]} uppercase={uppercase} {...props}>
          {children}
        </AsH1>
      );
  }
};

Heading.displayName = 'Heading';

export default Heading;
