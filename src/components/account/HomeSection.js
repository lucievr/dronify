import React from "react"
import { homeSection, welcomeMsg, userImg } from "../styles/AccountStyles"

const Home = ({ user }) => {
    return (
        <section css={homeSection}>
            <p css={welcomeMsg}>
                Welcome to your account, {user.name ? user.name : "friend"}!
            </p>
            <img src={user.picture} alt="user avatar" css={userImg}/>
        </section>
    )
}

export default Home
