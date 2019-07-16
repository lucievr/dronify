import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// STYLES
import { Global, css } from "@emotion/core"
import GlobalStyles from "../components/styles/GlobalStyles"
import { isAuthenticated } from "../utils/auth"

// GATSBY
import SEO from "../components/gatsby-default-files/seo"

// COMPONENTS
import Landing from "../components/main-page/landing/layout/Landing"
import Consumers from "../components/main-page/categories/layout/consumers/Consumers"
import Professionals from "../components/main-page/categories/layout/professionals/Professionals"
import Enterprise from "../components/main-page/categories/layout/enterprise/Enterprise"
import Accessories from "../components/main-page/categories/layout/accessories/Accessories"

//React scroller and ScrollupButton
import ReactPageScroller from "react-page-scroller"
import ScrollUpButton from "react-scroll-up-button"

const Category = css`
    height: 100vh;
`

const IndexPage = () => {
    let scrollRef = null

    const gotopage = eventKey => {
        scrollRef.goToPage(eventKey)
    }

    console.log(isAuthenticated());

    return (
        <>
            <Global styles={GlobalStyles} />
            <SEO title="home" />
            <ReactPageScroller
                ref={ref => {
                    scrollRef = ref
                }}
            >
                <Landing />
                <Consumers gotopage={gotopage} css={Category} />
                <Professionals gotopage={gotopage} css={Category} />
                <Enterprise gotopage={gotopage} css={Category} />
                <Accessories gotopage={gotopage} css={Category} />
            </ReactPageScroller>
            <ScrollUpButton />
        </>
    )
}

export default IndexPage
//working on scrollupButton
