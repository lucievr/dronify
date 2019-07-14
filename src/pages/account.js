import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import SEO from "../components/gatsby-default-files/seo"
import AccountNavigation from "../components/account/AccountNavigation"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/styles/GlobalStyles"
import { sectionWrapper, navStyle, navLink, homeSection, welcomeMsg} from '../components/styles/AccountStyles'
import Icon from '../components/styles/Icon'

import { login, isAuthenticated, getProfile } from "../utils/auth"

const Home = ({ user }) => {
    return (
    <section css={homeSection}>
    <p css={welcomeMsg}>Welcome to your account, {user.name ? user.name : "friend"}!</p>
    </section>
    )
}
const Settings = () => <p>Settings</p>
const Orders = () => <p>Orders</p>


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
                    <Link to="/account/" css={navLink}><span className="account-icon"><Icon name="home" /></span>Home</Link>{" "}
                    <Link to="/account/settings/" css={navLink}><span className="account-icon"><Icon name="settings" /></span>Settings</Link>{" "}
                    <Link to="/account/orders/" css={navLink}><span className="account-icon"><Icon name="shopping-cart" /></span>Orders</Link>{" "}
                </nav>
                <Router>
                    <Home path="/account/" user={user} />
                    <Settings path="/account/settings" />
                    <Orders path="/account/orders" />
                </Router>
            </section>
            <footer>© {new Date().getFullYear()} dronify</footer>
        </>
    )
}

export default Account
