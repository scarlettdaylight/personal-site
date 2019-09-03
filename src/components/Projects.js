import React from 'react';
import chunk from 'lodash/chunk';
import Reveal from 'react-reveal/Reveal';
import styled from 'styled-components';

import Section from './Atoms/Section';
import Row from './Atoms/Row';
import Column from './Atoms/Column';
import Box from './Atoms/Box';
import Heading from './Atoms/Heading';
import Paragraph from './Atoms/Paragraph';
import { useProjects } from '../utilis/staticQuery/useProjects';
import theme from '../assets/styles/theme';
import ProjectImageSelector from './ProjectImageSelector';

const ProjectItemWrapper = styled(Box)`
  transition: transform 160ms cubic-bezier(.17,.67,.83,.67);
  &:hover {
    transform: translate3d(-8px, -8px, 8px)
  }
`;

const ProjectItem = ({
  name, company, coverImage, techStack, url,
}) => (
  <ProjectItemWrapper>
    <ProjectImageSelector coverImage={coverImage} url={url} />
    <Box py={3} px={3} textAlign="center">
      <Paragraph color={theme.color.greyish} pb={[2]} fontSize={[1]} style={{ textTransform: 'capitalize' }}>
        {company}
      </Paragraph>
      <Heading as="h4" fontSize={[3, 3, 4]} pb={[3, 3]}>
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
  </ProjectItemWrapper>
);

const ProjectRow = ({ projectArr }) => (
  <Row>
    {projectArr && projectArr.map((project, i) => (
      <Column col={project.weight || null}>
        <Reveal effect={i === 0 ? 'item-from-left' : 'item-from-right'}>
          <ProjectItem {...project} />
        </Reveal>
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
