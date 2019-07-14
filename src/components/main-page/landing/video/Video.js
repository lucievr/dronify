import React from 'react'
import { css } from '@emotion/core'
import LandingVideo from "./video.mp4"
import Poster from "../../../../images/poster.jpg"

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

const Video = () => {
    return (
        <>
            <div css={videoDiv}>
                <video css={videoContent} preload="auto" autoPlay poster={Poster} muted loop>
                    <source
                        src={LandingVideo}
                        type="video/mp4"
                    />
                    Your browser is not supported!
                </video>
            </div>
        </>
    )
}

export default Video