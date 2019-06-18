import React from "react"
import { Link } from "gatsby"
import { Global } from "@emotion/core"

import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import LandingPage from '../components/LandingPage/landingPage'

const IndexPage = () => (
  <>
    <Global styles={GlobalStyles} />
    <LandingPage />
    <SEO title="home" />
    {/*  <Layout>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout> */}
  </>
)

export default IndexPage
