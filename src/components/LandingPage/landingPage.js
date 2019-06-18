import React from 'react'
import Video from "../../images/video.mp4"
import { css } from '@emotion/core'
import './button.scss'

// VIDEO STYLES

const videoDiv = css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: 0.9;
        overflow: hidden;
    `

const videoContent = css`
        height: 100%;
        width: 100%;
        object-fit: cover;
    `

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
        justify-content: center;
        align-items: center;
    `

const heading = css`
        font-size: 8rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 300;

        font-family: 'Raleway', sans-serif;
        font-family: 'Work Sans', sans-serif;
        font-family: 'Jura', sans-serif;
        font-family: 'Montserrat', sans-serif;
        
    `

const LandingPage = () => {
    return (
        <>
            {/* Video */}
            <div css={videoDiv}>
                <video css={videoContent} autoPlay muted loop preload="auto">
                    <source
                        src={Video}
                        type="video/mp4"
                    />
                    Your browser is not supported!
                </video>
            </div>
            <div css={landing}>
                <div css={darkOverlay}>
                    <div css={landingContent}>
                        <h1 css={heading}>Dronify</h1>
                    </div>
                </div>
            </div>

            {/* Navigation Button */}
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="nav-toggle" />

                <label for="nav-toggle" class="navigation__button">
                    <span class="navigation__icon">&nbsp;</span>
                </label>

                <div class="navigation__background">&nbsp;</div>

                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Consumers</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Professionals</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Enterprise</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Accessories</a>
                        </li>
                        <li class="navigation__item">
                            <a href="#" class="navigation__link">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default LandingPage