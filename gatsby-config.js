module.exports = {
  siteMetadata: {
    title: 'Scarlett',
    description: '',
    author: 'Scarlett Hui',
    email: 'scarletthui225@gmail.com',
    gitlab: 'scarletthui225',
    linkedIn: 'https://www.linkedin.com/in/scarletthui',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/icons` // See below to configure properly
        }
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Scarlett Personal Site',
        short_name: 'Scarlett',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
