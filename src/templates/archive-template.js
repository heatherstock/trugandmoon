import React from "react"
import { graphql } from "gatsby"

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <div>{edges[0].node.frontmatter.title}</div>
  )
}

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {eq: $tag}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          htmlAst 
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
