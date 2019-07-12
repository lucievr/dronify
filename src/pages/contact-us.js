import React from "react"
import Layout from "../components/gatsby-default-files/layout"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import GlobalStyles from "../components/styles/GlobalStyles"
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"

// import { connect } from 'react-redux'

const ContactUs = () => {

    return (
        <Layout>
            <Navigation />
            <Global styles={GlobalStyles} />
            <SEO title="Contact Us" />
        </Layout>
    )
}

// export default connect()(ContactUs)
export default ContactUs