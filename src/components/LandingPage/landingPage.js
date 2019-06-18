import React from 'react'
import { css } from '@emotion/core'

import Navigation from './Navigation/Navigation'
import Video from './Video/Video'

const landing = css`
    height: 100vh;
    overflow: hidden;
`

const darkOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
`

const landingContent = css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const heading = css`
    font-size: 4rem;
    color: #fff;
    letter-spacing: 1px;
    font-weight: 300;

    font-family: 'Raleway', sans-serif;
    font-family: 'Work Sans', sans-serif;
    font-family: 'Jura', sans-serif;
    font-family: 'Montserrat', sans-serif;             
`

const Button = css`
    color: #fff;
    border: 3px solid #fff;
    padding: 1rem 3rem;
    border-radius: 5rem;
    font-size: 1.5rem;
`

const LandingPage = () => {
    return (
        <>
            <div css={landing}>
                <div css={darkOverlay}>
                        <Navigation />
                        <Video />
                    <div css={landingContent}>
                        <h1 css={heading}>Explore the future</h1>
                        <a href='#' css={Button}>Fly with us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage