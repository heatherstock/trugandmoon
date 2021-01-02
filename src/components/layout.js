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
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 56px;
  color: ${props => props.theme.main};
  border-top: 1px solid ${props => props.theme.main};
`;

const defaultTheme = {
  main: "#154726",
  accent: "palevioletred",
  tag: "#e60073"
}

const Layout = ({ children, theme }) => {
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
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} theme={theme ? theme : defaultTheme}/>
        <div>{children}</div>
      <Footer theme={theme ? theme : defaultTheme}>© Trug & Moon, {new Date().getFullYear()}</Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
