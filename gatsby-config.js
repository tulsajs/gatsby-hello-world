module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    example: 'hello world'
  },
  {
    pathPrefix: "/gatsby-hello-world"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@nearbycoder`
      }
    }
  ]
};
