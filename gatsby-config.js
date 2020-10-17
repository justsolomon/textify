/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Textify',
    titleTemplate: '%s | Textify',
    description:
      'Free online OCR service for converting images, photos and screenshots to text',
    siteUrl: 'https://textify-image.netlify.app',
    image: '/images/og_image.jpeg',
    twitterUsername: '@gbsolomon1',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Textify`,
        short_name: `Textify`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/all-queries/`, `/edit/*`],
      },
    },
  ],
};
