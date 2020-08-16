import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

class Disqus extends React.Component {
  shouldRender = () => process.env.NODE_ENV === `production`

  render () {
    const path = this.props.location.pathname
    const siteUrl = this.props.siteUrl

    const url = `${siteUrl}${path}`

    const disqusConfig = {
      url: url,
      identifier: url,
    }

    if (this.shouldRender()) {
      return (
        <DiscussionEmbed
          shortname={this.props.disqusShortname}
          config={disqusConfig}
        />
      )
    }

    return null
  }
}

export default Disqus
