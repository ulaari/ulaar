import React from 'react'
import PostListHorizontal from '../PostListHorizontal'
import Subscribe from '../Subscribe'
import './Sidebar.scss'

class Sidebar extends React.Component {
  render () {
    const location = this.props.location
    const posts = this.props.posts.filter(
      ({ node }) => node.fields.slug !== location.pathname
    ).slice(0, 8)
    return (
      <aside className="page-aside">
        <div className="widget">
          <Subscribe siteMeta={this.props.siteMeta} />
        </div>
        <div className="widget widget-related">
          <PostListHorizontal posts={posts} siteMeta={this.props.siteMeta} />
        </div>
      </aside>
    )
  }
}

export default Sidebar
