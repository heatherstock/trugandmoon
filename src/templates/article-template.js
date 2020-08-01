import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const Heading = styled.h1`
  padding: 16px 0;;
  font-size: 24px;
  color: darkOliveGreen;
`;

const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
`;

  return (
    <Layout>
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Wrapper>
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