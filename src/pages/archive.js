import React from "react"
import { Link, graphql } from "gatsby"

const ArchivePage = ({ data: { allMarkdownRemark: { group } } }) => (
  <ul>
      {group.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/archive/${tag.fieldValue.toLowerCase()}/`}>
            <b>{tag.fieldValue}</b>
            {' '}
          </Link>
        </li>
      ))}
    </ul>
)

export const query = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default ArchivePage
