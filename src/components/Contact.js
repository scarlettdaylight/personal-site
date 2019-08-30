import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Section from './Atoms/Section';
import theme from '../assets/styles/theme';


const Contact = ({ companyName, address, email }) => (
  <Section py={[5, 5, 6]} background={theme.color.lightGray}>
    <div className="columns">
      <div className="column">
        <h2>
          <FormattedHTMLMessage id="contact.title" defaultMessage="Contact" />
        </h2>
        <div>
          {companyName}
        </div>
        <div className="address-box">
          {address}
        </div>
        <div>
          {email}
        </div>
      </div>
    </div>
  </Section>
);

export default Contact;
