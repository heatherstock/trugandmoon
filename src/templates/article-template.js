import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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

const Text = styled.div`
  font-size: 19px;
  line-height: 30px;
`;

  return (
    <Layout>
      <Wrapper>
        <Heading>{data.markdownRemark.frontmatter.title}</Heading>
        <Img fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`