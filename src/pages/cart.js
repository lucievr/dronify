import React from "react"
import Cart from '../components/cart/layout/Cart'
import SEO from "../components/gatsby-default-files/seo"
import Button from "../components/main-page/navigation-button/Button";

const CartPage = () => {
    return (
        <>
        <Button/>
        <SEO title="Shopping Cart" />
        <Cart />
        </>
    )
}

export default CartPage