import React from "react"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"
import Layout from "../components/layout"

import LandingPage from '../components/LandingPage/LandingPage'
import Products from '../components/Products/Products'

const IndexPage = () => (
  <Layout>
    <Global styles={GlobalStyles} />
    <SEO title="home" />
    <LandingPage />
    <Products />
  </Layout>
)

export default IndexPage
