import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/SEO'
import PostList from '../components/PostList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'

class Tags extends React.Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages, tagSlug } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        siteMeta={this.props.data.site.siteMetadata}
      >
        <SEO
          title={this.props.data.site.siteMetadata.name}
          description={this.props.data.site.siteMetadata.description}
          article={false}
          pathname={this.props.location.pathname}
        />
        <Container>
          <PostList
            posts={posts}
            siteMeta={this.props.data.site.siteMetadata}
          />
          <Pagination currentPage={currentPage} numPages={numPages} path={`/categories/${tagSlug}/`}/>
        </Container>
      </Layout>
    )
  }
}

export default Tags

export const tagsQuery = graphql`
  query tagsQuery($tag: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        name
        title
        description
        author {
          name
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { 
        frontmatter: { 
          type: { eq: "post" } 
          status: { ne: "draft" }
          tags: { in: [$tag] }
        }
      }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
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
                gatsbyImageData(width: 768)
              }
            }
          }
        }
      }
    }
  }
`
