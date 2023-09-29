const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;

	const typeDefs = [
	  `type MarkdownRemark implements Node {
			frontmatter: Frontmatter
		}`,
		`type Frontmatter @infer {
		  featured_image: File @fileByRelativePath,
		}`,
	];

	createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogList = path.resolve(`./src/templates/blog-list.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { status: { ne: "draft" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
        categoriesGroup: allMarkdownRemark(limit: 1000) {
          group(field: {frontmatter: {categories: SELECT}}) {
            fieldValue
            totalCount
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: {frontmatter: {tags: SELECT}}) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create blog posts pages.
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create blog list pages
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create categories pages
  const categories = result.data.categoriesGroup.group
  categories.forEach(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage)
    const categorySlug = _.kebabCase(category.fieldValue)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/categories/${categorySlug}/`: `/categories/${categorySlug}/page/${i+1}`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
          categorySlug: categorySlug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,  
        },
      })
    })
  })
  
  // Create tags pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage)
    const tagSlug = _.kebabCase(tag.fieldValue)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tags/${tagSlug}/`: `/tags/${tagSlug}/page/${i+1}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          tagSlug: tagSlug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })  
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
