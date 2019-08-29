import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { FormattedHTMLMessage } from 'react-intl';

const StyledSection = styled.section`
  max-width: 200px;
  text-align: center; 
  margin: auto;
  ${space}
  h2 {
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: 16px;
  }
  .address-box {
    padding-bottom: 16px;
  }
`;

const Contact = ({ companyName, address, email }) => (
  <StyledSection py={[7, 7, 8]}>
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
  </StyledSection>
);

export default Contact;
