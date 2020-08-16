import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import Container from '../components/Container'
import ArrowRight from '../assets/icons/arrow_right.svg'
import './search.scss'

class SearchPage extends React.Component {
  componentDidMount() {
    var cx = this.props.data.site.siteMetadata.cseId;
    (function() {
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();      
  }


  render () {
    return (
      <Layout
        location={this.props.location}
        siteMeta={this.props.data.site.siteMetadata}
      >
        <Container>
          <div className="search-results wrapper">
            <div className="page-heading">
              <h1>Search Results 
                <span id="query"></span> 
                <span>
                  <ArrowRight />
                </span>
              </h1>
            </div>
            <div className="gcse-searchresults-only"></div>
        </div>
        </Container>
      </Layout>
    )
  }
}

export default SearchPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        cseId
      }
    }
  }
`
