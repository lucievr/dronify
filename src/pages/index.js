import React from "react"
import { Global, css } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page/LandingPage"
import ReactPageScroller from "react-page-scroller"
import Consumers from "../components/products/products-categories/consumers/Consumer"
import Professionals from "../components/products/products-categories/professionals/Professional"
import Enterprise from "../components/products/products-categories/enterprise/Enterprise"
import Accessories from "../components/products/products-categories/accessories/Accessories"

import { Provider } from 'react-redux'
import store from '../store'

const Category = css`
  height: 100vh;
`

const IndexPage = () => {
  const scrollRef = null

  const goToPage = eventKey => {
    scrollRef.goToPage(eventKey)
  }

  const pageOnChange = number => {
    console.log(number)
  }

  return (
    <Provider store={store}>
      <Layout>
        <Global styles={GlobalStyles} />
        <SEO title="home" />
        <ReactPageScroller ref={scrollRef} pageOnChange={pageOnChange}>
          <LandingPage goToPage={goToPage} />
          <div css={Category} goToPage={goToPage}>
            <Consumers />
          </div>
          <div css={Category} goToPage={goToPage}>
            <Professionals />
          </div>
          <div css={Category} goToPage={goToPage}>
            <Enterprise />
          </div>
          <div css={Category} goToPage={goToPage}>
            <Accessories />
          </div>
        </ReactPageScroller>
      </Layout>
    </Provider>
  )
}

export default IndexPage
