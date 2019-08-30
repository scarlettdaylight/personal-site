import React from 'react';
import styled from 'styled-components';
import chunk from 'lodash/chunk';
import Section from './Atoms/Section';
import Row from './Atoms/Row';
import Column from './Atoms/Column';
import Box from './Atoms/Box';
import Heading from './Atoms/Heading';
import Paragraph from './Atoms/Paragraph';
import Image from './Atoms/Image';
import FlexBox from './Atoms/FlexBox';
import { useProjects } from '../utilis/staticQuery/useProjects';
import theme from '../assets/styles/theme';

const ImageBox = styled(Box)`
  filter: grayscale(100%);
  transition: filter 300ms ease-in-out;
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    filter: none;
  }
`;

const ProjectItem = ({
  name, company, coverImage, techStack,
}) => (
  <Box>
    <ImageBox>
      <Image imageInfo={coverImage} imageStyle={{ height: '400px' }} />
    </ImageBox>
    <Box py={3} px={3} textAlign="center">
      <Paragraph color={theme.color.greyish} pb={[1, 1, 2]} fontSize={[1]}>
        {company}
      </Paragraph>
      <Heading as="h4" fontSize={[3, 3, 4]}>
        {name}
      </Heading>
      <Box>
        <Paragraph fontSize={[1]} color={theme.color.greyish}>
          {techStack && techStack.map(tech => (
            <Box as="span" mx={2} >
              {tech}
            </Box>
          ))}
        </Paragraph>
      </Box>
    </Box>
  </Box>
);

const ProjectRow = ({ projectArr }) => (
  <Row>
    {projectArr && projectArr.map((project, i) => (
      <Column>
        <ProjectItem {...project} />
      </Column>
    ))}
  </Row>
);

const Projects = () => {
  const projects = chunk(useProjects(), 2);
  return (
    <Section py={[5, 5, 6]} px={[5, 5, 6]}>
      {projects && projects.map((projectArr, i) => (
        <ProjectRow projectArr={projectArr} index={i} />
      ))}
    </Section>
  );
};

export default Projects;
