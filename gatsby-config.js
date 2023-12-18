module.exports = {
  siteMetadata: {
    name: `uLaaR`,
    title: `uLaaR`,
    titleTemplate: '%s | uLaaR',
    author: {
      name: `Vishy Kuruganti`
    },
    description: `Popping the thought stack in near-real-time`,
    siteUrl: `https://www.ulaar.com`,
    social: {
      twitter: `ulaar`,
      linkedin: `vishykuruganti`,
      facebook: `ulaar`
    },
    disqusShortname: 'ulaar',
    image: `src/assets/gatsby-icon.png`,
    cseId: `a62bdf165371b3950`,
    mailchimpEndpoint: `https://yahoo.us17.list-manage.com/subscribe/post?u=57608fc397dda00d9b560ca89&amp;id=2e459fa602`
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170219602-2",
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "ULAAR RSS Feed",
          },
        ],
      },
    },
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
    `gatsby-plugin-twitter`
  ],
}
