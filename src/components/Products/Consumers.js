import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

const Layout = css`
  height: 100%;
  color: #887854;
`

const Consumers = () => {
  return (
    <div css={Layout}>
      <h3>Consumer drones</h3>
      <Link to="/consumer-drones/">
        <Button variant="outlined">Explore our collection</Button>
      </Link>
    </div>
  )
}

export default Consumers
