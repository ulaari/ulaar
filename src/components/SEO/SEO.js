import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        buildTime,
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          author,
          defaultImage,
          social,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${ siteUrl }${ image || defaultImage }`,
        url: `${ siteUrl }${ pathname || '/' }`,
        twitterUsername: social.twitter,
      }

      let schemaOrgJSONLD = [
        {
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          '@id': siteUrl,
          url: siteUrl,
          name: defaultTitle,
        },
      ]

      if (article) {
        schemaOrgJSONLD = [
          {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            '@id': seo.url,
            url: seo.url,
            name: title,
            headline: title,
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            description: seo.description,
            datePublished: buildTime,
            dateModified: buildTime,
            author: {
              '@type': 'Person',
              name: author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: defaultTitle,
              logo: {
                '@type': 'ImageObject',
                url: `${ siteUrl }${ defaultImage }`,
              },
            },
            isPartOf: siteUrl,
            mainEntityOfPage: {
              '@type': 'WebSite',
              '@id': siteUrl,
            },
          },
        ]
      }

      return (
        <React.Fragment>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <html lang="en" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.twitterUsername && (
              <meta name="twitter:creator" content={`@${seo.twitterUsername}`} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>

            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="/ms-icon-144x144.png"
            />

            <link
              rel="canonical"
              href={seo.url}
            />
          </Helmet>
        </React.Fragment>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      buildTime
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        author {
          name
        }
        defaultImage: image
        social {
          twitter
        }
      }
    }
  }
`
