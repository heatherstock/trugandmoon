import React from "react"
import EditionLayout from "../templates/editionLayout"

const theme = {
  main: "#154726",
  accent: "palevioletred",
  tag: "#e60073"
}

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <EditionLayout edges={edges} theme={theme}/>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___display}, filter: {frontmatter: {edition: {eq: "summer2020"}}}) {
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
