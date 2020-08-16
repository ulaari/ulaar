import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Linkedin from './Linkedin'
import Twitter from './Twitter'
import Facebook from './Facebook'
import './Share.scss'


const Share = ({ title, pathname }) => (
    <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          siteUrl,
          social,
        },
      },
    }) => {
        const share = {
            title: title || defaultTitle,
            url: `${ siteUrl }${ pathname || '/' }`
        }
        
        return (
          <div className="share-container">
            <ul className="share-list">
              <li className="share-item share-title">
                <h3>Share on social media</h3>
              </li>
              <li className="share-item">
                <Twitter title={share.title} url={share.url} username={social.twitter} />
              </li>
              <li className="share-item">
                <Linkedin title={share.title} url={share.url} username={social.linkedin} />
              </li>
              <li className="share-item">
                <Facebook title={share.title} url={share.url} username={social.facebook} />
              </li>
            </ul>
          </div>
        )
    }}/>
)

export default Share

Share.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string,
}

Share.defaultProps = {
  title: null,
  pathname: null,
}

const query = graphql`
  query Share {
    site {
      siteMetadata {
        defaultTitle: title
        siteUrl
        social {
          twitter
          linkedin
          facebook
        }
      }
    }
  }
`