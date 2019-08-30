import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

const IndexPage = ({ data }) => {
  const { hero, experience } = data.markdownRemark.frontmatter;
  return (
    <div>
      <SEO title="Home" />
      <Hero {...hero} />
      <Experience {...experience} />
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
        experience {
          desc
        }
      }
    }
  }
`;
