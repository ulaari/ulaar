import React from 'react'
import 'typeface-open-sans'
import './layout.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.Component {
  render () {
    return (
      <div className="layout">
        <Header location={this.props.location} siteMeta={this.props.siteMeta} />
        {this.props.children}
        <Footer location={this.props.location} siteMeta={this.props.siteMeta} />
      </div>
    )
  }
}

export default Layout
