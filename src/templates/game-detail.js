import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

const GamePage = ({ data }) => {
  const { name } = data.markdownRemark.frontmatter;
  return (
    <>
      <SEO pageTitle={name} />
      <div>
          {name}
      </div>
    </>
  );
};

export default GamePage;

// ********************************* Data graphql *********************************
export const pageQuery = graphql`
    query GamePageWithId($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                type
                name
            }
        }
    }
`;
