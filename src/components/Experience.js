import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Paragraph from './Atoms/Paragraph';
import Heading from './Atoms/Heading';
import theme from '../assets/styles/theme';
import Section from './Atoms/Section';
import { useStaticWorkExperience } from '../utilis/staticQuery/useStaticWorkExperience';
import Row from './Atoms/Row';
import Column from './Atoms/Column';
import FlexBox from './Atoms/FlexBox';

const Experience = ({ desc }) => {
  const works = useStaticWorkExperience();

  return (
    <Section p={0}>
      <Row px={[6, 6, 8]} py={[6, 6, 7]} multi>
        <Column col="12">
          <Heading as="h2" fontSize={[5, 5, 6]}>
            <FormattedHTMLMessage id="work.title" defaultMessage="Work Experience" />
          </Heading>
          <Paragraph maxWidth={['100%', '100%', '70%']} color={theme.color.greyish}>
            {desc}
          </Paragraph>
        </Column>
        {works && works.map(work => (
          <Column pr={4}>
            <Heading fontSize={[3, 3, 4]} pb={[2]} as="h3" color={theme.color.gray}>
              {work.company}
            </Heading>
            <FlexBox pb={1} justifyContent="flex-start">
              {work.jobTitle && work.jobTitle.map(title => (
                <Paragraph mr={3} pb={0} color={theme.color.greyish}>
                  {title}
                </Paragraph>
              ))}
            </FlexBox>
            <Paragraph fontSize={[1]}>
              {work.period}
            </Paragraph>
            <Paragraph fontSize={2} color={theme.color.black80}>
              {work.desc}
            </Paragraph>
          </Column>
        ))}
        <hr />
      </Row>
    </Section>
  );
};

export default Experience;
