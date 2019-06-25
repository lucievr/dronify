import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Global } from "@emotion/core"
import GlobalStyles from "../components/GlobalStyles"


const Account = () => (
    <Layout>
        <Global styles={GlobalStyles} />
        <SEO title="user account" />
        <h2>This will be the protected route for user account.</h2>
    </Layout>
)

export default Account