import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Layout = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: #887854;
  background-size: cover;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fconsumer-bg.jpg?alt=media&token=cfc4edd7-df2c-4904-ba22-23a0fe7c3723);
`
const styling = css`
  width: 50%;
`
const drone = css`
  max-width: 100%;
`

const Consumers = () => {
  return (
    <div css={Layout}>
      <div css={styling}>
        <h3>Consumer drones</h3>
        <Link to="/consumer-drones/">
          <button>Explore our collection</button>
        </Link>
      </div>
      <div css={styling}>
        <img
          css={drone}
          alt="drone"
          src="https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se.png?alt=media&token=07f00be4-b994-4e35-91f6-90335b2b74b6"
        />
      </div>
    </div>
  )
}

export default Consumers
