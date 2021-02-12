import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as _ from "../components/styled-components"
import { theme } from "../theme"

const JournalPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
  padding-bottom: 64px;
`;

  return (
    <Layout>
        <_.Edition>Journal</_.Edition>
      <Wrapper>
        {
    edges.map(edge => {
      return (
        <div>
          <_.Article>{edge.node.frontmatter.title}</_.Article>
          <_.Excerpt theme={theme}>{edge.node.excerpt}</_.Excerpt>
        </div>
      )
    })}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {eq: "journal"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          excerpt(pruneLength: 10000)
        }
      }
    }
  }
`

export default JournalPage