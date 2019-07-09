import React from "react"
import { css } from "@emotion/core"
import Navigation from './navigation/Navigation'
import Video from "./video/Video"
import Products from "../products/Products";
import { Link } from "gatsby"

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
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 2rem;
`

const heading = css`
  font-size: 4rem;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 10rem;
`

const button = css`
  color: #fff;
  border: 3px solid #fff;
  padding: 1rem 3rem;
  border-radius: 5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
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
            <Link to='/products' css={button}>
              Fly with us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
