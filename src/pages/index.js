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

const Subtitle = styled.div`
  grid-column: span 12;
  font-style: italic;
`;

const Type1 = styled.div`
  grid-column: span 3;
`;

const Type1Image = styled(Img)`
  grid-column: span 6;
  height: 350px;
`;

const Type2 = styled.div`
  grid-column: span 3;
`;

const Type2Image = styled(Img)`
  height: 150px;
`;

const Type3 = styled.div`
  grid-column: span 3;
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

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Welcome>
        <div>
          <Edition>{edges[0].node.frontmatter.title}</Edition>
          <p>{edges[0].node.htmlAst.children[0].children[0].value}</p>
        </div>
      </Welcome>
      <Subtitle>Subtitle</Subtitle>
      <Type1>
        <StyledLink to={edges[1].node.fields.slug}>
          <Article>{edges[1].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[1].node.excerpt}</p>
        <p>{edges[1].node.frontmatter.tag}</p>
      </Type1>
      <Type1Image fluid={edges[1].node.frontmatter.featuredImage.childImageSharp.fluid} />
      <Type2>
        <Type2Image fluid={edges[3].node.frontmatter.featuredImage.childImageSharp.fluid} />
        <StyledLink to={edges[3].node.fields.slug}>
          <Article>{edges[3].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[3].node.excerpt}</p>
        <p>{edges[3].node.frontmatter.tag}</p>
      </Type2>
      <Type3>
        <StyledLink to={edges[5].node.fields.slug}>
          <Article>{edges[5].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[5].node.excerpt}</p>
        <p>{edges[5].node.frontmatter.tag}</p>
      </Type3>
      <Type3>
        <StyledLink to={edges[6].node.fields.slug}>
          <Article>{edges[6].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[6].node.excerpt}</p>
        <p>{edges[6].node.frontmatter.tag}</p>
      </Type3>
      <Type3>
        <StyledLink to={edges[7].node.fields.slug}>
          <Article>{edges[7].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[7].node.excerpt}</p>
        <p>{edges[7].node.frontmatter.tag}</p>
      </Type3>
      <Type3>
        <StyledLink to={edges[8].node.fields.slug}>
          <Article>{edges[8].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[8].node.excerpt}</p>
        <p>{edges[8].node.frontmatter.tag}</p>
      </Type3>
      <Subtitle>Subtitle</Subtitle>
      <Type1>
      <StyledLink to={edges[2].node.fields.slug}>
          <Article>{edges[2].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[2].node.excerpt}</p>
        <p>{edges[2].node.frontmatter.tag}</p>
      </Type1>
      <Type1Image fluid={edges[2].node.frontmatter.featuredImage.childImageSharp.fluid} />
      <Type2>
        <Type2Image fluid={edges[4].node.frontmatter.featuredImage.childImageSharp.fluid} />
        <StyledLink to={edges[4].node.fields.slug}>
          <Article>{edges[4].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[4].node.excerpt}</p>
        <p>{edges[4].node.frontmatter.tag}</p>
      </Type2>
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___display}) {
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

export default IndexPage
