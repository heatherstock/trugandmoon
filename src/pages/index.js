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
  display: grid;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  overflow: hidden;
}
`;

// 80rem = 1280
// 60rem = 960
// 37.5rem = 600

const Welcome = styled.div`
  grid-column: span 12;
`;

const Section1 = styled.div`
  @media (max-width: 960px) {
    grid-column: span 12;
  }
  display: grid;
  grid-gap: 30px;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  grid-column: span 12;
`;

const Subtitle = styled.div`
  grid-column: span 12;
  font-style: italic;
`;

const Type1Container = styled.div`
  @media (max-width: 960px) {
    grid-column: span 12;
  }
  grid-area: auto/1/auto/-1;
  display: grid;
  grid-gap: 30px;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
  grid-column: span 9;
`;

const Type1Text = styled.div`
@media (max-width: 960px) {
  grid-area: 2/1/auto/-1;
}
    grid-column: span 4;
    grid-row-start: 1;
`;

const Type1Image = styled(Img)`
  @media (max-width: 960px) {
    grid-area: 1/1/auto/-1;
  }
  grid-column: span 8;
  height: 350px;
`;

const Type2Container = styled.div`
  @media (max-width: 960px) {
    display: grid;
    grid-template: auto/repeat(12,1fr);
    grid-gap: 30px;
    grid-auto-flow: row;
    grid-area: auto/1/auto/-1;
    grid-column: span 12;
  }
  grid-column: span 3;
`;

const Type2Text = styled.div`
  @media (max-width: 600px) {
    grid-column: span 12;
  }
  @media (min-width: 600px) and (max-width: 960px) {
    grid-column: span 6;
    grid-area: 1/1/auto/-1;
    grid-column-start: 7;
  }
`;

const Type2Image = styled(Img)`
  @media (max-width: 600px) {
    grid-column: span 12;
  }
  @media (min-width: 600px) and (max-width: 960px) {
    grid-column: span 6;
    grid-area: 1/1/auto/-1;
    grid-column-end: 7;
  }
  height: 150px;
`;

const Type3Text = styled.div`
  grid-column: span 3;
`;

const Section2 = styled.div`
  @media (max-width: 960px) {
    grid-column: span 12;
  }
  @media (min-width: 960px) {
    grid-column: span 8;
  }
  @media (min-width: 1280px) {
    grid-column: span 12;
  }
  display: grid;
  grid-gap: 30px;
  grid-template: auto/repeat(12,1fr);
  grid-auto-flow: row;
`;

const Type4Container = styled.div`
  @media (max-width: 1280px) {
    grid-column: span 12;
  }
  display: grid;
  grid-gap: 30px;
  grid-auto-flow: row;
  grid-template: auto/repeat(12,1fr);
  grid-area: auto/1/auto/-1;
  grid-column: span 9;
`;

const Type4Text = styled.div`
@media (max-width: 1280px) {
  grid-column: span 12;
  grid-area: 2/1/auto/-1;
}
  grid-column: span 4;
`;

const Type4Image = styled(Img)`
@media (max-width: 1280px) {
  grid-column: span 12;
  grid-area: 1/1/auto/-1;
}
  grid-column: span 8;
  height: 350px;
`;

const Type5Container = styled.div`
  @media (max-width: 1280px) {
    display: grid;
    grid-gap: 30px;
    grid-auto-flow: row;
    grid-template: auto/repeat(12,1fr);
    grid-column: span 12;
  }
  grid-column: span 3;
`;

const Type5Text = styled.div`
@media (max-width: 600px) {
  grid-column: span 12;
}
@media (min-width: 600px) and (max-width: 960px) {
  grid-column: 7 / -1;
  grid-row-start: 1;
}
  @media (min-width: 960px) and (max-width: 1280px) {
    grid-column: 1 / 7;
    grid-row-start: 1;
  }
`;

const Type5Image = styled(Img)`
@media (max-width: 600px) {
  grid-column: span 12;
}
@media (min-width: 600px) and (max-width: 960px) {
  grid-column: 1 / 7;
  grid-row-start: 1;
}
@media (min-width: 960px) and (max-width: 1280px) {
  grid-column: 7 / -1;
  grid-row-start: 1;
}
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
    </Wrapper>
    <Wrapper>
      <Section1>
        <Subtitle>Subtitle</Subtitle>
        <Type1Container>
          <Type1Text>
            <StyledLink to={edges[1].node.fields.slug}>
              <Article>{edges[1].node.frontmatter.title}</Article>
            </StyledLink>
            <p>{edges[1].node.excerpt}</p>
            <p>{edges[1].node.frontmatter.tag}</p>
          </Type1Text>
          <Type1Image fluid={edges[1].node.frontmatter.featuredImage.childImageSharp.fluid} />
        </Type1Container>
        <Type2Container>
          <Type2Image fluid={edges[3].node.frontmatter.featuredImage.childImageSharp.fluid} />
          <Type2Text>
            <StyledLink to={edges[3].node.fields.slug}>
            <Article>{edges[3].node.frontmatter.title}</Article>
            </StyledLink>
            <p>{edges[3].node.excerpt}</p>
            <p>{edges[3].node.frontmatter.tag}</p>
          </Type2Text>
        </Type2Container>
      </Section1>
      <Section2>
        <Subtitle>Subtitle</Subtitle>
        <Type4Container>
          <Type4Text>
          <StyledLink to={edges[2].node.fields.slug}>
              <Article>{edges[2].node.frontmatter.title}</Article>
            </StyledLink>
            <p>{edges[2].node.excerpt}</p>
            <p>{edges[2].node.frontmatter.tag}</p>
          </Type4Text>
          <Type4Image fluid={edges[2].node.frontmatter.featuredImage.childImageSharp.fluid} />
        </Type4Container>
        <Type5Container>
          <Type5Image fluid={edges[4].node.frontmatter.featuredImage.childImageSharp.fluid} />
          <Type5Text>
            <StyledLink to={edges[4].node.fields.slug}>
              <Article>{edges[4].node.frontmatter.title}</Article>
            </StyledLink>
            <p>{edges[4].node.excerpt}</p>
            <p>{edges[4].node.frontmatter.tag}</p>
          </Type5Text>
        </Type5Container>
      </Section2>
    </Wrapper>
    {/* <Wrapper>
      <Type3Text>
        <StyledLink to={edges[5].node.fields.slug}>
          <Article>{edges[5].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[5].node.excerpt}</p>
        <p>{edges[5].node.frontmatter.tag}</p>
      </Type3Text>
      <Type3Text>
        <StyledLink to={edges[6].node.fields.slug}>
          <Article>{edges[6].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[6].node.excerpt}</p>
        <p>{edges[6].node.frontmatter.tag}</p>
      </Type3Text>
      <Type3Text>
        <StyledLink to={edges[7].node.fields.slug}>
          <Article>{edges[7].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[7].node.excerpt}</p>
        <p>{edges[7].node.frontmatter.tag}</p>
      </Type3Text>
      <Type3Text>
        <StyledLink to={edges[8].node.fields.slug}>
          <Article>{edges[8].node.frontmatter.title}</Article>
        </StyledLink>
        <p>{edges[8].node.excerpt}</p>
        <p>{edges[8].node.frontmatter.tag}</p>
      </Type3Text>
    </Wrapper> */}
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
