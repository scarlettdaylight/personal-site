import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const IndexPage = ({ data }) => {
  const { hero } = data.markdownRemark.frontmatter;
  return (
    <div>
      <SEO title="Home" />
      <Hero {...hero} />
      <Contact />
    </div>
  );
};

export default IndexPage;

// ********************************* Data graphql *********************************
export const pageQuery = graphql`
  query HomePageWithId($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        description
        hero {
          name
          title
          desc
        }
      }
    }
  }
`;
