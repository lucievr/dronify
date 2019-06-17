import React from 'react'
import styled from '@emotion/styled'
import Video from "../images/video.mp4"

import '../components/fonts.css'

const VideoDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.9;
    overflow: hidden;
`

const VideoContent = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Landing = styled.div`
    height: 100vh;
    overflow: hidden;
`

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
`

const LandingContent = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Heading = styled.h1`
    font-size: 10rem;
    color: #fff;
    font-family: 'Gotham Light';
`

const LandingPage = () => {
    return (
        <>
            <VideoDiv>
                <VideoContent autoPlay muted loop preload="auto">
                    <source
                        src={Video}
                        type="video/mp4"
                    />
                    Your browser is not supported!
                </VideoContent>
            </VideoDiv>
            <Landing>
                <DarkOverlay>
                    <LandingContent>
                        <Heading>Dronify</Heading>
                    </LandingContent>
                </DarkOverlay>
            </Landing>
        </>
    )
}

export default LandingPage