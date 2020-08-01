import React from "react"
import Layout from "../components/layout"
import * as _ from "../components/styled-components"
import SEO from "../components/seo"


const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <Layout>
    <SEO title="Home" />
    <_.Wrapper>
      <_.Welcome>
        <div>
          <_.Edition>{edges[0].node.frontmatter.title}</_.Edition>
          <p>{edges[0].node.htmlAst.children[0].children[0].value}</p>
        </div>
      </_.Welcome>
    </_.Wrapper>
    <_.Wrapper>
      <_.Section1>
        <_.Subtitle>Highlights</_.Subtitle>
        <_.Type1Container>
          <_.Type1Text>
            <_.StyledLink to={edges[1].node.fields.slug}>
              <_.Article>{edges[1].node.frontmatter.title}</_.Article>
            </_.StyledLink>
            <p>{edges[1].node.excerpt}</p>
            <_.tag>{edges[1].node.frontmatter.tag.toUpperCase()}</_.tag>
          </_.Type1Text>
          <_.Type1Image fluid={edges[1].node.frontmatter.featuredImage.childImageSharp.fluid} />
        </_.Type1Container>
        <_.Type2Container>
          <_.Type2Image fluid={edges[3].node.frontmatter.featuredImage.childImageSharp.fluid} />
          <_.Type2Text>
            <_.StyledLink to={edges[3].node.fields.slug}>
            <_.Article>{edges[3].node.frontmatter.title}</_.Article>
            </_.StyledLink>
            <p>{edges[3].node.excerpt}</p>
            <_.tag>{edges[3].node.frontmatter.tag.toUpperCase()}</_.tag>
          </_.Type2Text>
        </_.Type2Container>
      </_.Section1>
      <_.Section2>
        <_.Subtitle>Contemplations</_.Subtitle>
        <_.Type4Container>
          <_.Type4Text>
          <_.StyledLink to={edges[2].node.fields.slug}>
              <_.Article>{edges[2].node.frontmatter.title}</_.Article>
            </_.StyledLink>
            <p>{edges[2].node.excerpt}</p>
            <_.tag>{edges[2].node.frontmatter.tag.toUpperCase()}</_.tag>
          </_.Type4Text>
          <_.Type4Image fluid={edges[2].node.frontmatter.featuredImage.childImageSharp.fluid} />
        </_.Type4Container>
        <_.Type5Container>
          <_.Type5Image fluid={edges[4].node.frontmatter.featuredImage.childImageSharp.fluid} />
          <_.Type5Text>
            <_.StyledLink to={edges[4].node.fields.slug}>
              <_.Article>{edges[4].node.frontmatter.title}</_.Article>
            </_.StyledLink>
            <p>{edges[4].node.excerpt}</p>
            <_.tag>{edges[4].node.frontmatter.tag.toUpperCase()}</_.tag>
          </_.Type5Text>
        </_.Type5Container>
      </_.Section2>
      <_.Section3>
        <_.Subtitle2>Miscellaneous</_.Subtitle2>
        <_.Type3aText>
          <_.StyledLink to={edges[5].node.fields.slug}>
            <_.Article>{edges[5].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <p>{edges[5].node.excerpt}</p>
          <_.tag>{edges[5].node.frontmatter.tag.toUpperCase()}</_.tag>
        </_.Type3aText>
        <_.Type3aText>
          <_.StyledLink to={edges[6].node.fields.slug}>
            <_.Article>{edges[6].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <p>{edges[6].node.excerpt}</p>
          <_.tag>{edges[6].node.frontmatter.tag.toUpperCase()}</_.tag>
        </_.Type3aText>
        <_.Type3bText>
          <_.StyledLink to={edges[7].node.fields.slug}>
            <_.Article>{edges[7].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <p>{edges[7].node.excerpt}</p>
          <_.tag>{edges[7].node.frontmatter.tag.toUpperCase()}</_.tag>
        </_.Type3bText>
        <_.Type3bText>
          <_.StyledLink to={edges[8].node.fields.slug}>
            <_.Article>{edges[8].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <p>{edges[8].node.excerpt}</p>
          <_.tag>{edges[8].node.frontmatter.tag.toUpperCase()}</_.tag>
        </_.Type3bText>
      </_.Section3>
    </_.Wrapper>
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
