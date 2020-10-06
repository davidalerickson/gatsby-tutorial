/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
//Require the env file for accessing Access Token for Contentful
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "Some Random Description",
    author: "John Doe",
    data: ["item 1", "item 2"],
    person: { name: "Peter", age: 32 },
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts/`,
    }
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `jbgkm8rmu14q`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.ACCESS_TOKEN,
    }
  }
],
}

