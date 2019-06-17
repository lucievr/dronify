import React from "react"
import { Link } from "gatsby"
import { css, Global } from "@emotion/core"

import GlobalStyles from "../components/GlobalStyles"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// import Video from "../images/video.mp4"
import LandingPage from '../components/LandingPage/landingPage'

const IndexPage = () => (
  
  <LandingPage />
   /* <Layout>
    <Global styles={GlobalStyles} />
    <SEO title="home" />
    <div className="div--video">
      <video
        id="background-video"
        width="720"
        height="540"
        src={Video}
        preload="auto"
        autoPlay
        muted
        loop
      />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>  */
  
)

export default IndexPage
