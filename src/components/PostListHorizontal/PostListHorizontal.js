import React from 'react'
import './PostListHorizontal.scss'
import PostCardHorizontal from '../PostCardHorizontal'

class PostListHorizontal extends React.Component {
  render () {
    return (
      <div className="post-list-hr">
        {this.props.posts.map(({ node }) => {
          return (
            <div key={node.fields.slug} className="post-item">
              <PostCardHorizontal
                key={node.fields.slug}
                post={node}
                siteMeta={this.props.siteMeta}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PostListHorizontal
