const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      articles: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  result.data.articles.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })

  result.data.tags.group.forEach(tag => {
    createPage({
      path: `/archive/${tag.fieldValue.toLowerCase()}/`,
      component: path.resolve(`./src/templates/archive-template.js`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}