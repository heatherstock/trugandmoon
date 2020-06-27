import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../theme";
import Header from "./header"

const Wrapper = styled.div`
@media (max-width: 600px) {
  margin: 0 18px;
}
@media (min-width: 600px) {
  margin: 0 36px;
}
  padding-bottom: 56px;
`;

const Footer = styled.footer`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 56px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle />
      <Wrapper>
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </Wrapper>
      <Footer>© Trug & Moon, {new Date().getFullYear()}</Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
