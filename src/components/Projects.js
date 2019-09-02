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

const ProjectImage = ({ coverImage }) => (
  <ImageBox height={[300, 300, 300, 400]} backgroundColor={theme.color.greyish}>
    <Image imageInfo={coverImage} imageStyle={{ height: '100%' }} />
  </ImageBox>
);

const ProjectItem = ({
  name, company, coverImage, techStack, url,
}) => (
  <Box>
    {url !== '' && (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <ProjectImage coverImage={coverImage} />
    </a>
    )}
    {url === '' && (
      <ProjectImage coverImage={coverImage} />
    )}
    <Box py={3} px={3} textAlign="center">
      <Paragraph color={theme.color.greyish} pb={[1, 1, 2]} fontSize={[1]} style={{ textTransform: 'capitalize' }}>
        {company}
      </Paragraph>
      <Heading as="h4" fontSize={[3, 3, 4]}>
        {name}
      </Heading>
      <Box>
        <Paragraph fontSize={[1]} color={theme.color.greyish}>
          {techStack && techStack.map(tech => (
            <Box as="span" mx={2}>
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
      <Column col={project.weight || null}>
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
