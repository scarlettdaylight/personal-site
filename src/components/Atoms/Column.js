import React from 'react';
import styled from 'styled-components';
import {
  background,
  color,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  border,
  borderRight,
  flexDirection,
  order,
  compose,
} from 'styled-system';

const ColumnBase = styled.div`
  ${compose(
    space,
    fontSize,
    color,
    textAlign,
    fontWeight,
    lineHeight,
    display,
    background,
    border,
    borderRight,
    flexDirection,
    order,
  )}

`;

const Column = ({ className, col, children, ...props }) => (
  <ColumnBase className={`column ${col ? `is-${col}` : ''} ${className || ''}`} {...props}>
    {children}
  </ColumnBase>
);

export default Column;
