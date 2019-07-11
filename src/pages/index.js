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

const Category = css`
  height: 100vh;
`

const IndexPage = () => {

    const scrollRef = null

    const gotopage = eventKey => {
        scrollRef.gotopage(eventKey)
    }

    return (
        <Layout>
            <Global styles={GlobalStyles} />
            <SEO title="home" />
            <ReactPageScroller ref={scrollRef}>
                <LandingPage />
                <Consumers gotopage={gotopage} css={Category} />
                <Professionals gotopage={gotopage} css={Category} />
                <Enterprise gotopage={gotopage} css={Category} />
                <Accessories gotopage={gotopage} css={Category} />
            </ReactPageScroller>
        </Layout>
    )
}

export default IndexPage
