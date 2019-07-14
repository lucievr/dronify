import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import SEO from "../components/gatsby-default-files/seo"
import AccountNavigation from "../components/account/AccountNavigation"
import { Global, css } from "@emotion/core"
import GlobalStyles from "../components/styles/GlobalStyles"

import { login, isAuthenticated, getProfile } from "../utils/auth"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const sectionWrapper = css`
    display: flex;
    flex-direction: row;
`

const navStyle = css`
    display: flex;
    flex-direction: column;
`

const Account = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()

    return (
        <>
            <AccountNavigation />
            <Global styles={GlobalStyles} />
            <SEO title="User account" />
            <section css={sectionWrapper}>
                <nav css={navStyle}>
                    <Link to="/account/">Home</Link>{" "}
                    <Link to="/account/settings/">Settings</Link>{" "}
                    <Link to="/account/billing/">Billing</Link>{" "}
                </nav>
                <Router>
                    <Home path="/account/" user={user} />
                    <Settings path="/account/settings" />
                    <Billing path="/account/billing" />
                </Router>
            </section>
            <footer>© {new Date().getFullYear()} dronify</footer>
        </>
    )
}

export default Account
