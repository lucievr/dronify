import React from "react"
import SEO from "../components/gatsby-default-files/seo"

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <footer>© {new Date().getFullYear()} dronify</footer>
    </>
)

export default NotFoundPage
