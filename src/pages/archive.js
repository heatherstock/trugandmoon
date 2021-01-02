import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as _ from "../components/styled-components"

const theme = {
  main: "#154726",
  accent: "palevioletred",
  tag: "#e60073"
}

const ArchivePage = ({ data: { allMarkdownRemark: { group } } }) => (
  <Layout>
    <_.UL>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <_.StyledLink  to={`/archive/${tag.fieldValue.toLowerCase()}/`} theme={theme}>
              <_.Article>{tag.fieldValue}</_.Article>
            </_.StyledLink >
          </li>
        ))}
      </_.UL>
    </Layout>
)
export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {tags: {nin: ["journal", "tbc"]}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default ArchivePage
