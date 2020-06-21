import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Work in progress :) While you're here, check out our <Link to="/blog">blog</Link></p>
    <p>"Know thyself and thou shalt know the Universe and God." - Pythagoras</p>
  </Layout>
)

export default IndexPage
