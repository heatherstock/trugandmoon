import React from "react"
import EditionLayout from "../templates/editionLayout"

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <EditionLayout edges={edges}/>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___display}, filter: {frontmatter: {edition: {eq: "winter2020-21"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

export default IndexPage
