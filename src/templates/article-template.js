import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const Heading = styled.h1`
  @media (max-width: 399px) {
    font-size: 36px;
    line-height: 42px;
  }
  padding: 16px 0;;
  font-size: 42px;
  line-height: 48px;
`;

const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
  padding-bottom: 64px;
`;

const Text = styled.div`
@media (max-width: 399px) {
  font-size: 17px;
  line-height: 24px;
}
  font-size: 20px;
  line-height: 32px;
`;

const theme = {
  main: "#154726",
  accent: "palevioletred",
  tag: "#e60073"
}

  return (
    <Layout theme={theme}>
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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