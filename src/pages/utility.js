import React from 'react';
import { FormattedMessage } from 'react-intl';
import Section from '../components/Atoms/Section';
import Column from '../components/Atoms/Column';
import Kebab from '../components/Utility/kebab';
import Heading from '../components/Atoms/Heading';
import Container from '../components/Atoms/Container';
import Row from '../components/Atoms/Row';

const Utility = () => (
  <Section>
    <Container>
      <Row multi>
        <Column>
          <Heading>
            <FormattedMessage id="utility.title" defaultMessage="Utility ♥ " />
          </Heading>
          <hr />
        </Column>
      </Row>
      <Row>
        <Column>
          <Kebab />
        </Column>
      </Row>
    </Container>
  </Section>
);

export default Utility;
