import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const Heading = styled.h1`
  font-size: 24px;
  color: darkOliveGreen;
`;

  return (
    <Layout>
      <div>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`