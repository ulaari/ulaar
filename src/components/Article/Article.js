import React from 'react'
import Share from '../Share'
import './Article.scss'

class Article extends React.Component {
  render () {
    const post = this.props.post
    const siteMeta = this.props.siteMeta

    return (
      <article
        itemScope
        itemType="https://schema.org/Article"
        className="page-content"
      >
        <header className="page-header">
          <div className="page-header-text">
            <h1 className="page-header-title" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            <span className="page-header-author">{siteMeta.author.name}</span>
            <span className="page-header-reading-time">
              {post.timeToRead} mins
            </span>
          </div>
        </header>
        <section className="page-body" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }}>
        </section>
        <Share title={post.frontmatter.title} pathname={post.fields.slug}/>
      </article>
    )
  }
}

export default Article
