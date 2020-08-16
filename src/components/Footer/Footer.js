import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'
import './Footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <footer className="site-footer">
        <Container>
          <div className="footer-hero footer-col">
            <div className="footer-branding">
              <Link className="footer-title" to="/">
                {this.props.siteMeta.name}
              </Link>
            </div>
            <span className="footer-copyright">
              Copyright &copy; 2018 {this.props.siteMeta.name}
            </span>
          </div>
          <div className="footer-col footer-links">
            <ul className="footer-list">
              <li className="footer-item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-item">
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </div>
        </Container>
        <Container>
          <div className="tool-links">
            <ul className="footer-list">
            </ul>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
