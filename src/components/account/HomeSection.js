import React from "react"
import { homeSection, welcomeMsg } from "../styles/AccountStyles"

const Home = ({ user }) => {
    return (
        <section css={homeSection}>
            <p css={welcomeMsg}>
                Welcome to your account, {user.name ? user.name : "friend"}!
            </p>
        </section>
    )
}

export default Home
