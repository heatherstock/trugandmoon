import React from "react"
import EditionLayout from "../components/editionLayout"

const theme = {
  main: "#191970",
  accent: "#B8860B",
  tag: "#916A08"
}

const Summer2020Edition = ({ data: { allMarkdownRemark: { edges } } }) => (
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
            tag
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

export default Summer2020Edition
