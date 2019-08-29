const includes = require('lodash/includes');
const pull = require('lodash/pull');
const some = require('lodash/some');

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const { LANG_LIST, DEFAULT_LANG } = require('./src/configs/langSetting');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allMarkdownRemark.edges;

    pages.forEach((edge) => {
      const { id } = edge.node;
      let { slug } = edge.node.fields;
      const { templateKey } = edge.node.frontmatter;
      let currLang = DEFAULT_LANG;

      // do not create page that has no templateKey
      if (!templateKey) {
        return;
      }

      // pull language
      some(pull([...LANG_LIST], DEFAULT_LANG), (lang) => {
        if (!includes(slug, `--${lang}/`)) {
          return;
        }
        currLang = lang;
        slug = `/${lang}${slug.replace(`--${lang}/`, '/')}`;
      });


      createPage({
        path: slug.replace('/home/', '/').replace('/index/', '/'), // handle home page and index
        tags: edge.node.frontmatter.tags || [],
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        // additional data can be passed via context as this.props.pageContext
        context: {
          id,
          lang: currLang,
        },
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // create page that is not a md for all lang
  LANG_LIST.forEach((lang) => {
    createPage({
      ...page,
      path: `/${lang}${page.path}`,
      context: {
        ...page.context,
        lang,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
