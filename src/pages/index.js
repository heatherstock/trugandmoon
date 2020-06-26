import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-gap: 20px;
  grid-auto-flow: dense;
`;

const Welcome = styled.div`
  grid-column: span 12;
`;

const Primary = styled.div`
@media (min-width: 900px) {
  grid-column: span 6;
}
  grid-column: span 12;
`;

const NotPrimary = styled.div`
@media (max-width: 600px) {
  grid-column: span 12;
}
@media (min-width: 600px) {
  grid-column: span 6;
}
@media (min-width: 900px) {
  grid-column: span 4;
}
`;


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Welcome>
      {data.welcome.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
      </Welcome>
      <Primary>
        {data.primary.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
        ))}
      </Primary>
      {data.secondary.edges.map(({ node }) => (
        <NotPrimary>
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <p>{node.excerpt}</p>
          </div>
        </NotPrimary>
      ))}
      {data.tertiary.edges.map(({ node }) => (
        <NotPrimary>
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        </NotPrimary>
      ))}
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query {
    welcome: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "welcome"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    primary: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "primary"}}}) {
      totalCount
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
    secondary: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "secondary"}}}) {
      totalCount
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
    tertiary: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "tertiary"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
