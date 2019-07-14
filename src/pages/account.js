import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import SEO from "../components/gatsby-default-files/seo"
import AccountNavigation from "../components/account/AccountNavigation"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/styles/GlobalStyles"
import {
    sectionWrapper,
    navStyle,
    navLink,
} from "../components/styles/AccountStyles"
import Icon from "../components/styles/Icon"

import { login, isAuthenticated, getProfile } from "../utils/auth"
import Home from "../components/account/HomeSection"
import Settings from "../components/account/SettingsSection"
import Orders from "../components/account/OrdersSection"

console.log(getProfile())

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        let user = getProfile()
        this.state = {
            user: {
                email: user.email,
                nickname: user.nickname,
                name: user.name,
                picture: user.picture,
                address: "Taborska 31",
                address2: "",
                city: "Prague",
                country: "Czech Republic",
                postcode: "140 00",
            },
        }
    }

    render() {
        if (!isAuthenticated()) {
            login()
            return <p>Redirecting to login...</p>
        }
        console.log(this.state.user)

        return (
            <>
                <AccountNavigation />
                <Global styles={GlobalStyles} />
                <SEO title="User account" />
                <section css={sectionWrapper}>
                    <nav css={navStyle}>
                        <Link to="/account/" css={navLink}>
                            <span className="account-icon">
                                <Icon name="home" />
                            </span>
                            Home
                        </Link>{" "}
                        <Link to="/account/settings/" css={navLink}>
                            <span className="account-icon">
                                <Icon name="settings" />
                            </span>
                            User Settings
                        </Link>{" "}
                        <Link to="/account/orders/" css={navLink}>
                            <span className="account-icon">
                                <Icon name="shopping-cart" />
                            </span>
                            Orders
                        </Link>{" "}
                    </nav>
                    <Router>
                        <Home path="/account/" user={this.state.user} />
                        <Settings
                            path="/account/settings"
                            user={this.state.user}
                        />
                        <Orders path="/account/orders" user={this.state.user} />
                    </Router>
                </section>
                <footer>© {new Date().getFullYear()} dronify</footer>
            </>
        )
    }
}
