import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { theme } from "../theme"

export default ({ data }) => {
  const Heading = styled.h1`
  @media (max-width: 399px) {
    font-size: 36px;
    line-height: 42px;
  }
  padding: 16px 0;
  margin-bottom: 0;
  font-size: 42px;
  line-height: 48px;
`;

const Tag = styled.p`
  font-family: Work Sans, sans serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.tag};
  margin: 0px auto 4px;
  padding-bottom: 16px;
`;

const Wrapper = styled.div`
  max-width: 80ch;
  margin: auto;
  padding-bottom: 64px;
`;

const Text = styled.div`
`;

  return (
    <Layout>
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <Tag>{data.markdownRemark.frontmatter.tags.toUpperCase()}</Tag>
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
        tags
      }
    }
  }
`