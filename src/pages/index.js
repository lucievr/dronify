import React from "react"
import { Link } from "gatsby"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"

import LandingPage from '../components/LandingPage/LandingPage'
import Products from '../components/Products/Products'

const IndexPage = () => (
  <>
    <Global styles={GlobalStyles} />
    <LandingPage />
    <Products />
    <SEO title="home" />
    <Link to="/consumer-drones/">Link to consumer drones</Link>
  </>
)

export default IndexPage
