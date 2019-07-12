import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/landing-page/navigation/Navigation"
import GlobalStyles from "../components/GlobalStyles"
import { Global } from "@emotion/core"
import SEO from "../components/seo"

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