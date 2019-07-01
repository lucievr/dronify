import React from "react"
import { css } from "@emotion/core"
import Consumers from "./products-categories/consumers/Consumer"
import Professionals from "./products-categories/professionals/Professional"
import Enterprise from "./products-categories/enterprise/Enterprise"
import Accessories from "./products-categories/accessories/Accessories"
//import darkOverlay from '../GlobalStyles'

const Layout = css`
  background: rgba(0, 0, 0, 1);
`

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
