import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Container from '../components/Container'
import NotFound from '../components/NotFound'

class NotFoundPage extends React.Component {
  render () {
    return (
      <Layout
        location={this.props.location}
        siteMeta={this.props.data.site.siteMetadata}
      >
        <Container>
          <NotFound />
        </Container>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
  }
`
