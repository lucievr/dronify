import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"

const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => (
  <Layout>
    <Global styles={GlobalStyles} />
    <SEO title="user account" />
    <nav>
      <Link to="/account">Home</Link>{" "}
      <Link to="/account/settings">Settings</Link>{" "}
      <Link to="/account/billing">Billing</Link>{" "}
    </nav>
    <h2>This will be the protected route for user account.</h2>
    <Router>
      <Home path="/account" />
      <Settings path="/account/settings" />
      <Billing path="/account/billing" />
    </Router>
  </Layout>
)

export default Account
