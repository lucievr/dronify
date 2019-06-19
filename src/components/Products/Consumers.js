import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Layout = css`
  height: 100%;
  color: #887854;
`

const Consumers = () => {
  return (
    <div css={Layout}>
      <h3>Consumer drones</h3>
      <Link to="/consumer-drones/">
        <button>Explore our collection</button>
      </Link>
    </div>
  )
}

export default Consumers
