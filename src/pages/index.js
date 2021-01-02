import React from "react"
import EditionLayout from "../templates/editionLayout"

const theme = {
  main: "#191970",
  accent: "#B8860B",
  tag: "#916A08"
}

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <EditionLayout edges={edges} theme={theme}/>
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
