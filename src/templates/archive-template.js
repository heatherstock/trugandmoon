import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as _ from "../components/styled-components"
import { theme } from "../theme"

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
  padding-bottom: 64px;
`;


  const Div = styled.div`
  padding-top: 36px;
  `;

  return (
    <Layout>
      <Wrapper>{
    edges.map(edge => {
      return (
        <Div>
        <_.StyledLink to={edge.node.fields.slug} theme={theme}>
          <_.Article>{edge.node.frontmatter.title}</_.Article>
        </_.StyledLink>
        <_.Excerpt theme={theme}>{edge.node.excerpt}</_.Excerpt>
        </Div>
      )
    })}
      </Wrapper>
    </Layout>
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
