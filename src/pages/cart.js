import React from "react"
import Cart from '../components/cart/layout/Cart'
import SEO from "../components/gatsby-default-files/seo"

const CartPage = () => {
    return (
        <>
        <SEO title="Shopping Cart" />
        <Cart />
        </>
    )
}

export default CartPage