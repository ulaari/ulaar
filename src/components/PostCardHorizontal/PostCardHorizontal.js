import React from 'react'
import './PostCardHorizontal.scss'
import {getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

class PostCardHorizontal extends React.Component {
  render () {
    const image = getImage(this.props.post.frontmatter.featured_image)
    
    return (
      <article
        className="post-card-hr"
        itemScope
        itemType="https://schema.org/Article"
      >
        <Link
          to={this.props.post.fields.slug}
          className={`card-link ${this.props.post.frontmatter.featured_image ? 'has-media': null}`}
          title={this.props.post.frontmatter.title}
        >
          {this.props.post.frontmatter.featured_image ? 
          <figure
            className="card-media"
            itemProp="image"
            itemType="https://schema.org/ImageObject"
          >
            <GatsbyImage
              className="card-image"
              alt={this.props.post.frontmatter.title}
              image={image}
            />
          </figure>: null
          }
          <div className="card-text">
            <h3
              className="card-title"
              itemProp="headline"
              style={{ WebkitBoxOrient: 'vertical' }}
            >
              {this.props.post.frontmatter.title}
            </h3>
            <span
              className="card-author"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">{this.props.siteMeta.author.name}</span>
            </span>
            <span className="card-reading-time">
              {this.props.post.timeToRead} mins
            </span>
            <p className="card-description" style={{ WebkitBoxOrient: 'vertical' }}>
              {this.props.post.frontmatter.description}
            </p>
          </div>
        </Link>
      </article>
    )
  }
}

export default PostCardHorizontal
