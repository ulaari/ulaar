import React from 'react'
import fbIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/twitter.svg'
import googleIcon from '../../assets/google.svg'
import './PageSocial.scss'

class PageSocial extends React.Component {
  render () {
    return (
      <div className="page-social is-fixed">
        <ul className="page-social-list">
          <li className="page-social-item">
            <a
              href={`https://twitter.com/share?url=${
                this.props.location.href
              }&text=${ this.props.title }`}
            >
              <img src={twitterIcon} />
            </a>
          </li>
          <li className="page-social-item">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${
                this.props.location.href
              }`}
            >
              <img src={fbIcon} />
            </a>
          </li>
          <li className="page-social-item">
            <a
              href={`https://plus.google.com/share?url=${
                this.props.location.href
              }`}
            >
              <img src={googleIcon} />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default PageSocial
