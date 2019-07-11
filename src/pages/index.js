import React from "react"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page/LandingPage"
import Products from "../components/products/Products"

import store from '../store'
import { Provider } from 'react-redux'

const IndexPage = () => (
  <Provider store={store}>
    <Layout>
      <Global styles={GlobalStyles} />
      <SEO title="home" />
      <LandingPage />
      <Products />
    </Layout>
  </Provider>
)

export default IndexPage
