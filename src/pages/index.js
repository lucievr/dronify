import React from "react"
import { Global, css } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"
import SEO from "../components/seo"

import Layout from "../components/layout"
import LandingPage from "../components/landing-page/LandingPage"
import Products from "../components/products/Products"
import ReactPageScroller from "react-page-scroller"
import Consumers from "../components/Products/products-categories/consumers/Consumer"
import Professionals from "../components/Products/products-categories/professionals/Professional"
import Enterprise from "../components/Products/products-categories/enterprise/Enterprise"
import Accessories from "../components/Products/products-categories/accessories/Accessories"

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
  )
}

export default IndexPage
