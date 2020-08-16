import React from 'react'
import './Subscribe.scss'

class Subscribe extends React.Component { 
  render () {
    const mailchimpEndpoint = this.props.siteMeta.mailchimpEndpoint
    console.log(mailchimpEndpoint)
    return (
      <div className="subscription-card">
        <div className="card-text">
          <h2 className="card-title">Subscribe to our Newsletter</h2>
        </div>

        <form className="subscription-form" 
          method="post" 
          action={mailchimpEndpoint}
          target="_blank">
          <div className="form-item">
            <input 
              type="email" 
              name="EMAIL" 
              required={true}
              className="form-control"
              placeholder="Enter your email.."  />
          </div>
          <button 
            type="submit" 
            className="card-btn">Subscribe →</button>
        </form>
      </div>
    )
  }
}

export default Subscribe
