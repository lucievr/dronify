import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import SEO from "../components/gatsby-default-files/seo"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/styles/GlobalStyles"

import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()

    return (
        <>
            <Global styles={GlobalStyles} />
            <SEO title="user account" />
            <nav>
                <Link to="/account/">Home</Link>{" "}
                <Link to="/account/settings/">Settings</Link>{" "}
                <Link to="/account/billing/">Billing</Link>{" "}
                <a
                    href="#logout"
                    onClick={e => {
                        logout()
                        e.preventDefault()
                    }}
                >
                    Log Out
                </a>
            </nav>
            <Router>
                <Home path="/account/" user={user} />
                <Settings path="/account/settings" />
                <Billing path="/account/billing" />
            </Router>
            <footer>© {new Date().getFullYear()} dronify</footer>
        </>
    )
}

export default Account
