import React from "react"
import { Link } from "gatsby"
import { landing, darkOverlay, landingContent, heading, button} from '../../../styles/LandingStyles'
import Navigation from "../navigation/Navigation"
import Video from "../video/Video"

const LandingPage = () => {
    return (
        <div css={landing}>
            <div css={darkOverlay}>
                <Navigation />
                <Video />
                <div css={landingContent}>
                    <h1 css={heading}>Explore the future</h1>
                    <Link to='/consumer-drones' css={button}>
                        Fly with us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
