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

  & > * {
  }
}
`;

const Welcome = styled.div`
  grid-column: span 12;
`;

const RightHand = styled.div`
@media (max-width: 900px) {
  display: none;
}
@media (min-width: 900px) {
  grid-column: col-start 11 / span 2;
}
`;

const Primary = styled.div`
@media (max-width: 600px) {
  grid-column: span 12;
}
@media (min-width: 600px) {
  grid-column: span 6;
}
@media (min-width: 900px) {
  grid-column: span 5;
}
`;

// 2 --> 640px
// 3 --> 880px
// 3 + RHR --> 

const PrimaryImage = styled(Img)`
  height: 250px;
`;

const PrimaryImageContainer = styled.div`
  @media (max-width: 600px) {
    grid-column: span 12;
  }
  @media (min-width: 600px) {
    grid-column: span 6;
  }
  @media (min-width: 900px) {
    grid-column: span 5;
  }
`;


const SecondaryType1 = styled.div`
@media (max-width: 600px) {
  grid-column: span 12;
}
@media (min-width: 600px) {
  grid-column: span 6;
}
@media (min-width: 900px) {
  grid-column: span 5;
}
`;

const SecondaryType2 = styled.div`
@media (max-width: 900px) {
  grid-column: span 12;
}
@media (min-width: 900px) {
  grid-column: span 4;
}
`;

const SecondaryImage = styled(Img)`
  height: 150px;
`;

const Tertiary = styled.div`
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
      {data.primary.edges.map(({ node }) => (
      <PrimaryImageContainer>
        <div key={node.id}>
          <PrimaryImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        </div>
      </PrimaryImageContainer>
      ))}
      <Primary>
        {data.primary.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Primary>
      {data.quaternary.edges.map(({ node }) => (
        <RightHand>
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        </RightHand>
      ))}
      {data.secondary1.edges.map(({ node }) => (
        <SecondaryType1>
          <div key={node.id}>
            <SecondaryImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        </SecondaryType1>
      ))}
      {data.secondary2.edges.map(({ node }) => (
        <SecondaryType2>
          <div key={node.id}>
            <SecondaryImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        </SecondaryType2>
      ))}
      {data.tertiary.edges.map(({ node }) => (
        <Tertiary>
          <div key={node.id}>
            <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        </Tertiary>
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
    secondary1: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "secondaryType1"}}}) {
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
    secondary2: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "secondaryType2"}}}) {
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
    quaternary: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "quat"}}}) {
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
