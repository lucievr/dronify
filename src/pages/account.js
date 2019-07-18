import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import SEO from "../components/gatsby-default-files/seo"
import Navigation from "../components/main-page/landing/navigation/Navigation"
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
import Button from "../components/main-page/navigation-button/Button";
import Footer from "../components/footer/Footer";

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        let user = getProfile()
        this.state = {
            user: {
                email: user.email,
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

    handleChange = event => {
        const { user } = { ...this.state }
        const currentState = user
        const { name, value } = event.target
        currentState[name] = value

        this.setState({ user: currentState })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(" ✔ Your changes have been saved")
    }

    render() {
        if (!isAuthenticated()) {
            login()
            return <p>Redirecting to login...</p>
        }
        return (
            <>
                <Button />
                <Navigation />
                <Global styles={GlobalStyles} />
                <SEO title="Account" />
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
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <Orders path="/account/orders" user={this.state.user} />
                    </Router>
                </section>
                <Footer />
            </>
        )
    }
}
