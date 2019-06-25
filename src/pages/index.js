import React from "react"
import { Link } from "gatsby"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"

import Layout from "../components/layout"
import LandingPage from "../components/LandingPage/LandingPage"
import Products from "../components/Products/Products"

const IndexPage = () => (
  <Layout>
    <Global styles={GlobalStyles} />
    <SEO title="home" />
    <LandingPage />
    <Products />
    <Link to="/account">Go to your account</Link>
  </Layout>
)

export default IndexPage
