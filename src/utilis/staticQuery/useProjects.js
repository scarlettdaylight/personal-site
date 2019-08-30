import { graphql, useStaticQuery } from 'gatsby';

export const useProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PROJECT_QUERY {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "project"}}},
        sort: {fields: frontmatter___order, order: DESC}
      ) {
        edges {
          node {
            id
            frontmatter {
              type
              name
              company
              developmentTime
              desc
              techStack
              coverImage {
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
    }
  `);

  return allMarkdownRemark.edges.map(edge => (
    {
      id: edge.node.id,
      ...edge.node.frontmatter,
    }
  ));
};
