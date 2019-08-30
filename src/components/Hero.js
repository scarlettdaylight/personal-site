import React from 'react';
import styled from 'styled-components';
import { fontSize } from 'styled-system';
import Paragraph from './Atoms/Paragraph';
import Heading from './Atoms/Heading';
import Box from './Atoms/Box';
import theme from '../assets/styles/theme';
import Section from './Atoms/Section';
import Row from './Atoms/Row';
import Column from './Atoms/Column';

const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .headline {
    font-family: 'Oxygen', sans-serif;
  }
`;


const Hero = ({
  name, title, desc,
}) => (
  <HeroSection p={0}>
    <Row px={[6, 6, 8]} pt={[7, 7, 8]} pb={[5, 5, 6]}>
      <Column>
        <Box>
          <Heading fontSize={[2, 2, 3]} pb={[1]} as="h1">
            {name}
          </Heading>
          <Paragraph fontSize={[1, 1, 2]} color={theme.color.greyish}>
            {title}
          </Paragraph>
          <Paragraph fontSize={[6, 6, 7]} className={'headline'}>
            {desc}
          </Paragraph>
          <hr />
        </Box>
      </Column>
    </Row>
  </HeroSection>
);

export default Hero;
