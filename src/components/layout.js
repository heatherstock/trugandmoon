import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "../theme";
import Header from "./header"

const Wrapper = styled.div`
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
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <div>{children}</div>
        <Footer>© Trug & Moon, {new Date().getFullYear()}</Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
