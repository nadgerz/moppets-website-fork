import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BannerRegion from "../components/bannerRegion"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
      <BannerRegion/>
      <Skills/>
      <Portfolio/>
  </Layout>
)

export default IndexPage
