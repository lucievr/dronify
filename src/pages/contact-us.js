import React from "react"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import GlobalStyles from "../components/styles/GlobalStyles"
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import ContactForm from "../components/form/contact-form"

// import { connect } from 'react-redux'

const ContactUs = () => {
    return (
        <>
            <SEO title="Contact Us" />
            <Global styles={GlobalStyles} />
            <Navigation />
            <ContactForm />
            {/* <footer>© {new Date().getFullYear()} dronify</footer> */}
        </>
    )
}

// export default connect()(ContactUs)
export default ContactUs
