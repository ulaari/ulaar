import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Article from '../components/Article'
import Sidebar from '../components/Sidebar'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Disqus from '../components/Disqus'
import './blog-post.scss'

class BlogPostTemplate extends React.Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const post = this.props.data.markdownRemark

    return (
      <Layout
        location={this.props.location}
        siteMeta={this.props.data.site.siteMetadata}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.featured_image ? post.frontmatter.featured_image.publicURL: null}
          pathname={post.fields.slug}
          article={true}
        />
        <main className="blog-main-content">
          <Container>
            <div className="primary-content">
              <Article
                post={post}
                siteMeta={this.props.data.site.siteMetadata}
              />
              <Disqus
                location={this.props.location}
                siteUrl={this.props.data.site.siteMetadata.siteUrl}
                disqusShortname={
                  this.props.data.site.siteMetadata.disqusShortname
                }
              />
            </div>
            <div className="secondary-content">
              <Sidebar
                location={this.props.location}
                posts={posts}
                siteMeta={this.props.data.site.siteMetadata}
              />
            </div>
          </Container>
        </main>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
        author {
          name
        }
        siteUrl
        disqusShortname
        mailchimpEndpoint
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      timeToRead
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        featured_image {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 1024)
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { 
        frontmatter: { 
          type: { eq: "post" } 
          status: { ne: "draft" }
        }
      }
      limit: 8 
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            type
            description
            featured_image {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
    }
  }
`
