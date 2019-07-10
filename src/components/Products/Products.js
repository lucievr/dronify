import React, { useRef } from "react"
import { css } from "@emotion/core"
import Consumers from "./products-categories/consumers/Consumer"
import Professionals from "./products-categories/professionals/Professional"
import Enterprise from "./products-categories/enterprise/Enterprise"
import Accessories from "./products-categories/accessories/Accessories"
import { DarkOverlay } from "../GlobalStyles"
import ReactPageScroller from "react-page-scroller"

const Layout = css`
  background: rgba(0, 0, 0, 1);
`

const Category = css`
  height: 100vh;
`

const Products = ({ goToPage }) => <></>

export default Products
