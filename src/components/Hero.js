import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import Paragraph from './Atoms/Paragraph';
import Heading from './Atoms/Heading';
import Box from './Atoms/Box';
import theme from '../assets/styles/theme';
import Section from './Atoms/Section';
import Row from './Atoms/Row';
import Column from './Atoms/Column';
import FlexBox from './Atoms/FlexBox';

const HeroSection = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  //height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .name {
    font-family: 'Source Sans Pro', sans-serif;
  }
  .headline {
    font-family: 'Oxygen', sans-serif;
  }
  .typed-cursor {
    color: ${props => props.theme.color.red};
  }
`;


const Hero = ({
  name, title, desc, typerArr,
}) => {
  useEffect(() => {
    const typed = new Typed('#typed', {
      strings: typerArr,
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 50,
      backDelay: 2000,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <HeroSection px={[6, 6, 8]} pt={[7, 7, 200]} pb={[0, 0, 2]}>
      <Row>
        <Column>
          <Box>
            <Heading fontSize={[2, 2, 3]} pb={[1]} as="h1" className="name">
              {name}
            </Heading>
            <Paragraph fontSize={[1, 1, 2]} color={theme.color.greyish}>
              {title}
            </Paragraph>
            <Paragraph fontSize={[6, 6, 7]} className="headline">
              {desc}
            </Paragraph>
            <FlexBox justifyContent="flex-start" className="headline" fontSize={[6, 6, 7]}>
              <div id="typed" />
            </FlexBox>
            <hr />
          </Box>
        </Column>
      </Row>
    </HeroSection>
  );
};

export default Hero;
