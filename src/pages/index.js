import React from "react"
import { Link } from "gatsby"
import "materialize-css/dist/js/materialize.js"
import { css, Global } from "@emotion/core"

import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Global styles={GlobalStyles} />
    <SEO title="Home" />
    <h1>Dronify</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
