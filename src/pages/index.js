import React from "react"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"
import LandingPage from '../components/LandingPage/landingPage'

const IndexPage = () => (
  <>
    <Global styles={GlobalStyles} />
    <LandingPage />
    <SEO title="home" />
  </>
)

export default IndexPage
