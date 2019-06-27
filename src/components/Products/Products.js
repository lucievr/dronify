import React from "react"
import { css } from "@emotion/core"
import Consumers from "./Consumers"
import Professionals from "./Professionals"
import Enterprise from "./Enterprise"
import Accessories from "./Accessories"

const Layout = css``

const Category = css`
  height: 100vh;
  border-bottom: 3px solid #000;
`

const Products = () => {
  return (
    <main css={Layout}>
      <div css={Category}>
        <Consumers />
      </div>
      <div css={Category}>
        <Professionals />
      </div>
      <div css={Category}>
        <Enterprise />
      </div>
      <div css={Category}>
        <Accessories />
      </div>
    </main>
  )
}

export default Products
