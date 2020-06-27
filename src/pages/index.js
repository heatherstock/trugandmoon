import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
@media (max-width: 600px) {
  grid-gap: 18px;
}
@media (min-width: 600px) {
  grid-gap: 30px;
}
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-auto-flow: dense;
  overflow: hidden;
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
  grid-column: col-start 10 / span 3;
}
`;

const Bottom = styled.div`
@media (max-width: 900px) {
  grid-column: span 3;
}
@media (min-width: 900px) {
  display: none;
}
`;

const Type1 = styled.div`
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

const Type1Image = styled(Img)`
  height: 250px;
`;

const Type1ImageContainer = styled.div`
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


const Type2 = styled.div`
@media (max-width: 400px) {
  grid-column: span 12;
}
@media (min-width: 400px) {
  grid-column: span 6;
}
@media (min-width: 600px) {
  grid-column: span 4;
}
@media (min-width: 900px) {
  grid-column: span 3;
}
`;

const Type3 = styled.div`
@media (max-width: 600px) {
  grid-column: span 12;
}
@media (min-width: 600px) {
  grid-column: span 4;
}
@media (min-width: 900px) {
  grid-column: span 3;
}
`;

const SecondaryImage = styled(Img)`
  height: 150px;
`;

const Edition = styled.h1`
@media (max-width: 600px) {
  font-size: 32px;
}
@media (min-width: 600px) {
  font-size: 42px;
}
  color: darkOliveGreen;
`;

const Article = styled.h2`
  font-size: 24px;
  color: darkOliveGreen;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkOliveGreen;
  &:hover {
    text-decoration: underline;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Welcome>
      {data.welcome.edges.map(({ node }) => (
        <div key={node.id}>
          <Edition>{node.frontmatter.title}</Edition>
          <p>{node.htmlAst.children[0].children[0].value}</p>
        </div>
      ))}
      </Welcome>
      {data.primary.edges.map(({ node }) => (
      <Type1ImageContainer>
        <div key={node.id}>
          <Type1Image fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        </div>
      </Type1ImageContainer>
      ))}
      <Type1>
        {data.primary.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
            <Article>{node.frontmatter.title}</Article>
            </StyledLink>
            <p>{node.excerpt}</p>
            <p>{node.frontmatter.tag}</p>
          </div>
        ))}
      </Type1>
      {data.quaternary.edges.map(({ node }) => (
        <RightHand>
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
            <Article>{node.frontmatter.title}</Article>
            </StyledLink>
            <p>{node.excerpt}</p>
          </div>
        </RightHand>
      ))}
      {data.secondary1.edges.map(({ node }) => (
        <Type2>
          <div key={node.id}>
            <SecondaryImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <StyledLink to={node.fields.slug}>
            <Article>{node.frontmatter.title}</Article>
            </StyledLink>
            <p>{node.excerpt}</p>
            <p>{node.frontmatter.tag}</p>
          </div>
        </Type2>
      ))}
      {data.secondary2.edges.map(({ node }) => (
        <Type3>
          <div key={node.id}>
            <SecondaryImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <StyledLink to={node.fields.slug}>
            <Article>{node.frontmatter.title}</Article>
            </StyledLink>
            <p>{node.excerpt}</p>
            <p>{node.frontmatter.tag}</p>
          </div>
        </Type3>
      ))}
      {data.tertiary.edges.map(({ node }) => (
        <Type2>
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
            <Article>{node.frontmatter.title}</Article>
            </StyledLink>
            <p>{node.excerpt}</p>
            <p>{node.frontmatter.tag}</p>
          </div>
        </Type2>
      ))}
      {data.quaternary.edges.map(({ node }) => (
        <Bottom>
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
            <Article>{node.frontmatter.title}</Article>
            </StyledLink>
            <p>{node.excerpt}</p>
          </div>
        </Bottom>
      ))}
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query {
    welcome: allMarkdownRemark(filter: {frontmatter: {type: {eq: "welcome"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          htmlAst 
          fields {
            slug
          }
        }
      }
    }
    primary: allMarkdownRemark(filter: {frontmatter: {type: {eq: "primary"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tag
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
    secondary1: allMarkdownRemark(filter: {frontmatter: {type: {eq: "secondaryType1"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tag
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
    secondary2: allMarkdownRemark(filter: {frontmatter: {type: {eq: "secondaryType2"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tag
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
    tertiary: allMarkdownRemark(filter: {frontmatter: {type: {eq: "tertiary"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tag
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    quaternary: allMarkdownRemark(filter: {frontmatter: {type: {eq: "quat"}}}) {
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
