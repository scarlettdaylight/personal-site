import React from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';
import Paragraph from './Atoms/Paragraph';
import Heading from './Atoms/Heading';
import Box from './Atoms/Box';
import theme from '../assets/styles/theme';

const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100vw;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;


const Hero = ({
  name, title, desc,
}) => (
  <HeroSection>
    <Box px={[7, 7, 8]} pt={[7, 7, 8]} pb={[5, 5, 6]}>
      <Heading fontSize={[2, 2, 3]} pb={[1]} as="h1" color={theme.color.gray}>
        {name}
      </Heading>
      <Paragraph fontSize={[1, 1, 2]} color={theme.color.greyish}>
        {title}
      </Paragraph>
      <Paragraph fontSize={[6, 6, 7]}>
        {desc}
      </Paragraph>
      <hr />
    </Box>
  </HeroSection>
);

export default Hero;
