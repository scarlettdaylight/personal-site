import React from 'react';
import styled from 'styled-components';
import {
  color, fontSize, fontWeight, lineHeight, space, textAlign, width, height,
  compose,
} from 'styled-system';

const ContainerBase = styled.div`
  ${compose(
    space,
    width,
    fontSize,
    color,
    textAlign,
    fontWeight,
    lineHeight,
    height,
  )}
`;

const Container = ({
  className, children, fluid, ...props
}) => (
  <ContainerBase className={`container ${fluid ? 'is-fluid' : ''} ${className || ''}`} {...props}>
    {children}
  </ContainerBase>
);

export default Container;
