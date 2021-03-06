/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Transmitting music and code from an undisclosed location.`,
    titleTemplate: `Chris Black: %s`,
    image: `/img/ChrisBlack-Train.jpg`,
    imageAlt: `Chris Black in a train.`,
    description: `Chris Black is a musician and JavaScript developer creating new sound and code in an undisclosed location.`,
    url: `https://www.chrisblack.net`,
    twitterUsername: `@thischrisblack`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Press Start 2P`,
          `roboto mono\:400,700`,
          `IBM plex mono mono\:400,700`,
          `VT323\:400,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: true,
          messaging: false,
          functions: false,
          performance: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-use-query-params",
  ],
}
