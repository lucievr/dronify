import React from "react"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import GlobalStyles from "../components/styles/GlobalStyles"
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import ContactForm from "../components/form/contact-form"
import Button from '../components/main-page/navigation-button/Button'
import Footer from "../components/footer/Footer";

const ContactUs = () => {
    return (
        <>
            <SEO title="Contact Us" />
            <Global styles={GlobalStyles} />
            <Button />
            <Navigation />
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactUs
