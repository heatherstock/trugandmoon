import React from "react"
import Layout from "../components/layout"
import * as _ from "../components/styled-components"
import { theme } from "../theme"

const EditionLayout = ({ edges }) => (
<Layout>
  <_.Wrapper>
    <_.Welcome>
      <div>
        <_.Edition theme={theme}>{edges[0].node.frontmatter.title}</_.Edition>
        <_.Excerpt theme={theme}>{edges[0].node.htmlAst.children[0].children[0].value}</_.Excerpt>
      </div>
    </_.Welcome>
  </_.Wrapper>
  <_.Wrapper>
    <_.Section1>
      <_.Subtitle theme={theme}>Highlights</_.Subtitle>
      <_.Type1Container>
        <_.Type1Text>
          <_.Tag theme={theme}>{edges[1].node.frontmatter.tags.toUpperCase()}</_.Tag>
          <_.StyledLink to={edges[1].node.fields.slug} theme={theme}>
            <_.Article>{edges[1].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <_.Excerpt theme={theme}>{edges[1].node.excerpt}</_.Excerpt>
        </_.Type1Text>
        <_.Type1Image fluid={edges[1].node.frontmatter.featuredImage.childImageSharp.fluid} />
      </_.Type1Container>
      <_.Type2Container theme={theme}>
        <_.Type2Image fluid={edges[3].node.frontmatter.featuredImage.childImageSharp.fluid} />
        <_.Type2Text>
          <_.Tag theme={theme}>{edges[3].node.frontmatter.tags.toUpperCase()}</_.Tag>
          <_.StyledLink to={edges[3].node.fields.slug} theme={theme}>
          <_.Article>{edges[3].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <_.Excerpt theme={theme}>{edges[3].node.excerpt}</_.Excerpt>
        </_.Type2Text>
      </_.Type2Container>
    </_.Section1>
    <_.Section2>
      <_.Subtitle theme={theme}>Contemplations</_.Subtitle>
      <_.Type4Container>
        <_.Type4Text>
          <_.Tag theme={theme}>{edges[2].node.frontmatter.tags.toUpperCase()}</_.Tag>
        <_.StyledLink to={edges[2].node.fields.slug} theme={theme}>
            <_.Article>{edges[2].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <_.Excerpt theme={theme}>{edges[2].node.excerpt}</_.Excerpt>
        </_.Type4Text>
        <_.Type4Image fluid={edges[2].node.frontmatter.featuredImage.childImageSharp.fluid} />
      </_.Type4Container>
      <_.Type5Container theme={theme}>
        <_.Type5Image fluid={edges[4].node.frontmatter.featuredImage.childImageSharp.fluid} />
        <_.Type5Text>
          <_.Tag theme={theme}>{edges[4].node.frontmatter.tags.toUpperCase()}</_.Tag>
          <_.StyledLink to={edges[4].node.fields.slug} theme={theme}>
            <_.Article>{edges[4].node.frontmatter.title}</_.Article>
          </_.StyledLink>
          <_.Excerpt theme={theme}>{edges[4].node.excerpt}</_.Excerpt>
        </_.Type5Text>
      </_.Type5Container>
    </_.Section2>
    <_.Section3>
      <_.Subtitle2 theme={theme}>Miscellaneous</_.Subtitle2>
      <_.Type3aText theme={theme}>
        <_.Tag theme={theme}>{edges[5].node.frontmatter.tags.toUpperCase()}</_.Tag>
        <_.StyledLink to={edges[5].node.fields.slug} theme={theme}>
          <_.Article>{edges[5].node.frontmatter.title}</_.Article>
        </_.StyledLink>
        <_.Excerpt theme={theme}>{edges[5].node.excerpt}</_.Excerpt>
      </_.Type3aText>
      <_.Type3aText theme={theme}>
        <_.Tag theme={theme}>{edges[6].node.frontmatter.tags.toUpperCase()}</_.Tag>
        <_.StyledLink to={edges[6].node.fields.slug} theme={theme}>
          <_.Article>{edges[6].node.frontmatter.title}</_.Article>
        </_.StyledLink>
        <_.Excerpt theme={theme}>{edges[6].node.excerpt}</_.Excerpt>
      </_.Type3aText>
      <_.Type3bText theme={theme}>
        <_.Tag theme={theme}>{edges[7].node.frontmatter.tags.toUpperCase()}</_.Tag>
        <_.StyledLink to={edges[7].node.fields.slug} theme={theme}>
          <_.Article>{edges[7].node.frontmatter.title}</_.Article>
        </_.StyledLink>
        <_.Excerpt theme={theme}>{edges[7].node.excerpt}</_.Excerpt>
      </_.Type3bText>
      <_.Type3bText theme={theme}>
        <_.Tag theme={theme}>{edges[8].node.frontmatter.tags.toUpperCase()}</_.Tag>
        <_.StyledLink to={edges[8].node.fields.slug} theme={theme}>
          <_.Article>{edges[8].node.frontmatter.title}</_.Article>
        </_.StyledLink>
        <_.Excerpt theme={theme}>{edges[8].node.excerpt}</_.Excerpt>
      </_.Type3bText>
    </_.Section3>
  </_.Wrapper>
</Layout>
) 

export default EditionLayout;