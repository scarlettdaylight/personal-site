import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  const { name, company } = data.markdownRemark.frontmatter;
  return (
    <>
      <SEO pageTitle={name} />
      <div>
          {name}
      </div>
    </>
  );
};

export default IndexPage;

// ********************************* Data graphql *********************************
export const pageQuery = graphql`
    query ProjectPageWithId($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                type
                name
                company
                developmentTime
                desc
                techStack
                coverImage {
                    imageArr {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 90) {
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
