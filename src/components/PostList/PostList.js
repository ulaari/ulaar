import React from 'react'
import './PostList.scss'
import PostCard from '../PostCard'

class PostList extends React.Component {
  render () {
    let numCols = this.props.numCols || 2
    if (numCols > 3) {
      numCols = 3
    }
    if (numCols <= 1) {
      numCols = 2
    }
    return (
      <div className="post-list">
        {this.props.posts.map(({ node }, index) => {
          return (
            <React.Fragment key={node.fields.slug}>
              <div
                className={
                  'post-item ' +
                  (numCols === 2 ? 'post-item-one-half' : 'post-item-one-third')
                }
              >
                <PostCard
                  key={node.fields.slug}
                  post={node}
                  siteMeta={this.props.siteMeta}
                />
              </div>
              {(index + 1) % numCols === 0 ? (
                <div className="post-banner" />
              ) : null}
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

export default PostList
