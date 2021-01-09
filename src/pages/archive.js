import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as _ from "../components/styled-components"
import { theme } from "../theme"

const ArchivePage = ({ data }) => (
  <Layout>
    <_.ArchiveWrapper>
      <_.ArchiveTitle>Find articles by tags:</_.ArchiveTitle>
      <_.UL>
          {data.tags.group.map((tag) => (
            <li key={tag.fieldValue}>
              <_.StyledLink  to={`/archive/${tag.fieldValue.toLowerCase()}/`} theme={theme}>
                <_.ArchiveTag>{tag.fieldValue}</_.ArchiveTag>
              </_.StyledLink >
            </li>
          ))}
        </_.UL>
        <_.ArchiveTitle>View previous editions:</_.ArchiveTitle>
        <_.UL>
          {data.edition.distinct.map((edition) => (
            <li key={edition}>
              <_.StyledLink  to={`/${edition.toLowerCase()}`} theme={theme}>
                <_.ArchiveTag>{edition}</_.ArchiveTag>
              </_.StyledLink >
            </li>
          ))}
        </_.UL>
      </_.ArchiveWrapper>
    </Layout>
)
export const query = graphql`
  query {
    tags: allMarkdownRemark(filter: {frontmatter: {tags: {nin: ["journal", "tbc", "welcome"]}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    edition: allMarkdownRemark(filter: {frontmatter: {edition: {ne: "Winter2020-21"}}}) {
      distinct(field: frontmatter___edition)
    }
  }
`

export default ArchivePage
