import React from "react"
import Payment from '../components/cart/layout/Payment'
import SEO from "../components/gatsby-default-files/seo"
import Button from "../components/main-page/navigation-button/Button";

const PaymentPage = () => {
    return (
        <>
        <Button/>
        <SEO title="Payment" />
        <Payment />
        </>
    )
}

export default PaymentPage