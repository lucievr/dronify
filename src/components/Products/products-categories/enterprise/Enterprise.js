import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Button from '../../products-button/Button'
import Heading from '../../products-heading/Heading'

const Layout = css`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-size: cover;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-drones%2Fenterprise-bg.jpg?alt=media&token=414ecf5a-7aeb-4a24-a620-0e93e535ad17);
`
const styling = css`
  width: 50%;
`
const drone = css`
  max-width: 100%;
`

const Enterprise = () => {
  return (
    <div css={Layout}>
      <div css={styling}>
        <Heading name='Enterprise drones'/>
        <Link to="/enterprise-drones/">
          <Button label='Button' />
        </Link>
      </div>
      <div css={styling}>
        <img
          css={drone}
          alt="drone"
          src="https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-drones%2Fmatrice-200v2-ii.png?alt=media&token=c8176e7c-4869-4f0f-abce-48e6fd4d8cf3"
        />
      </div>
    </div>
  )
}

export default Enterprise
