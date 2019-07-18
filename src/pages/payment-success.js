import React from "react"
import PaymentSuccess from '../components/cart/layout/PaymentSuccess'
import SEO from "../components/gatsby-default-files/seo"
import Button from '../components/main-page/navigation-button/Button'

const PaymentSuccessPage = () => {
    return (
        <>
        <Button/>
        <SEO title="Success" />
        <PaymentSuccess />
        </>
    )
}

export default PaymentSuccessPage