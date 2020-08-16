import React from 'react'
import { Link } from 'gatsby'
import './NotFound.scss'

class NotFound extends React.Component {
  render () {
    return (
      <div className="page-not-found">
        <div className="page-not-found-content">
          <h1 className="title">404</h1>
          <div className="desc">The Page you're looking for was not found.</div>
          <Link to="/">
            <button className="go-back-btn" type="primary" size="large">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default NotFound
