import React from "react"
import { settingsSection, welcomeMsg } from "../styles/AccountStyles"

const Settings = ({ user }) => {
    return (
        <section css={settingsSection}>
            <p css={welcomeMsg}>
                Welcome to your account, {user.name ? user.name : "friend"}!
            </p>
            <p>User Settings</p>
        </section>
    )
}

export default Settings
