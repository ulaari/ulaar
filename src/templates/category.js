import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/SEO'
import PostList from '../components/PostList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'

class Categories extends React.Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages, categorySlug } = this.props.pageContext
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
          <Pagination currentPage={currentPage} numPages={numPages} path={`/categories/${categorySlug}/`} />
        </Container>
      </Layout>
    )
  }
}

export default Categories

export const categoriesQuery = graphql`
  query categoriesQuery($category: String, $skip: Int!, $limit: Int!) {
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
          categories: { in: [$category] }
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
