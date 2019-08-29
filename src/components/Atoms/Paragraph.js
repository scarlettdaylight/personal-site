import React from 'react';
import styled from 'styled-components';
import {
  compose, borders, color, display, fontSize, fontWeight, lineHeight, maxWidth, minHeight, space, textAlign, width,
} from 'styled-system';

const StyledParagraph = styled.p`
  margin: 0;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: inherit;

  ${compose(
    space,
    width,
    fontSize,
    color,
    display,
    textAlign,
    lineHeight,
    minHeight,
    maxWidth,
    fontWeight,
    borders,
  )}
`;

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph fontSize={[2, 2, 3]} pb={[2, 2, 3]} {...props}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
