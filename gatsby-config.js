module.exports = {
  siteMetadata: {
    name: `TechSangam`,
    title: `TechSangam`,
    titleTemplate: '%s | TechSangam',
    author: {
      name: `Vishy Kuruganti`
    },
    description: `Social entreprises. Impact Investing. India`,
    siteUrl: `https://www.techsangam.com`,
    social: {
      twitter: `ulaar`,
      linkedin: `vishykuruganti`,
      facebook: `ulaar`
    },
    disqusShortname: 'techsangam-1',
    image: `src/assets/gatsby-icon.png`,
    cseId: `014135517967479897858:j0mafjwon0z`,
    mailchimpEndpoint: `https://techsangam.us10.list-manage.com/subscribe/post?u=cc2dfc32d8c7a0ecc70f20f55&amp;id=09daff5f5d`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/uploads`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-anchor`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170219602-1",
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#08b27f',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TechSangam`,
        short_name: `TechSangam`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#08b27f`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets\/icons/
          }
      }
    },
  ],
}
