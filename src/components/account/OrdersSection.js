import React from "react"
import { ordersSection, welcomeMsg } from "../styles/AccountStyles"

const Orders = ({ user }) => {
    return (
        <section css={ordersSection}>
            <p css={welcomeMsg}>
                Welcome to your account, {user.name ? user.name : "friend"}!
            </p>
            <p>Past Orders</p>
        </section>
    )
}

export default Orders
