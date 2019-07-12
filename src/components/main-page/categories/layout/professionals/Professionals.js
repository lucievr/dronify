import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Button from '../../button/Button'
import Heading from '../../heading/Heading'

const Layout = css`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #667787;
  background-size: cover;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/professional-drones%2Fprofessional-bg.jpg?alt=media&token=6eb4503c-ccb8-4f7e-9562-10bd22eae7a8);
`
const styling = css`
  width: 50%;
`
const drone = css`
  max-width: 100%;
`
const Professionals = () => {
  return (
    <div css={Layout}>
      <div css={styling}>
        <Heading name='Professional drones' />
        <Link to="/professional-drones/">
          <Button label='Button' />
        </Link>
      </div>
      <div css={styling}>
        <img
          css={drone}
          alt="drone"
          src="https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/professional-drones%2Fzenmuse-x7.png?alt=media&token=f40badd9-5aa6-4b05-812d-bda0e8186933"
        />
      </div>
    </div>
  )
}

export default Professionals
