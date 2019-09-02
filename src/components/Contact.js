import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from './Atoms/Section';
import theme from '../assets/styles/theme';
import Row from './Atoms/Row';
import Column from './Atoms/Column';
import Heading from './Atoms/Heading';
import Paragraph from './Atoms/Paragraph';
import { useSiteMetadata } from '../utilis/staticQuery/useSiteMetadata';
import Box from './Atoms/Box';

import Wave from '../assets/icons/wave.svg';

const Contact = () => {
  const meta = useSiteMetadata();

  return (
    <Section id="contact" py={[8, 8, 9]} background={theme.color.lightGray} position="relative">
      <Row>
        <Column>
          <Heading as="h2" textAlign="center" pb={[4, 4, 6]} fontSize={[6, 6, 7]}>
            <FormattedMessage id="contact.title" defaultMessage="Let's work together!" />
          </Heading>
          <Paragraph textAlign="center" color={theme.color.greyish}>
            <FormattedMessage
              id="contact.reach"
              defaultMessage="Send me an <mail>email</mail> or message me at <l>LinkedIn</l> to chat more :)"
              values={{
                mail: msg => (
                  <a href={`mailto:${meta.email}`}>
                    {msg}
                  </a>
                ),
                l: msg => (
                  <a target="_blank" rel="noopener noreferrer" href={meta.linkedIn}>
                    {msg}
                  </a>
                ),
              }}
            />
          </Paragraph>
        </Column>
      </Row>
      {/*<Box position="absolute" width="100%" bottom={0} left={0} lineHeight={0}>*/}
      {/*  <Wave />*/}
      {/*</Box>*/}
    </Section>
  );
};

export default Contact;
