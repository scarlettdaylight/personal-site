import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
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
      <hr />
      <Row px={[6, 6, 8]} py={[6, 6, 7]} multi>
        <Column col="12">
          <Heading as="h2" fontSize={[5, 5, 6]} pb={[3, 3]} fontFamily="Oxygen, sans-serif">
            <FormattedHTMLMessage id="work.title" defaultMessage="Work Experience" />
          </Heading>
          <Paragraph maxWidth={['100%', '100%', '100%', '70%']} color={theme.color.greyish} pb={[3, 3, 4]}>
            {desc}
          </Paragraph>
        </Column>
        {works && works.map((work) => {
          const descArr = work.desc.split('\n');

          return (
            <Column pr={4} col={12}>
              <Heading fontSize={[3, 3, 4]} pb={[1]} as="h3" color={theme.color.gray}>
                {work.company}
              </Heading>
              <FlexBox pb={1} justifyContent="flex-start" pb={[2]}>
                {work.jobTitle && work.jobTitle.map(title => (
                  <Paragraph mr={3} pb={0} color={theme.color.greyish}>
                    {title}
                  </Paragraph>
                ))}
              </FlexBox>
              <Paragraph fontSize={[1]}>
                {work.period}
              </Paragraph>
              {descArr.map((d, i) => (
                <Paragraph fontSize={2} color={theme.color.black80} pb={i === (descArr.length - 1) ? [2, 2, 3] : [1, 1]}>
                  {d}
                </Paragraph>
              ))}
            </Column>
          );
        })}
        {/* <hr /> */}
      </Row>
    </Section>
  );
};

export default Experience;
