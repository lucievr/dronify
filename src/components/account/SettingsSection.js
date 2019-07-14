import React from "react"
import { settingsSection, profileTitle } from "../styles/AccountStyles"
import UserSettings from './SettingsForm'

const Settings = ({ user }) => {
    return (
        <section css={settingsSection}>
            {/* <p css={welcomeMsg}>
                Welcome to your account, {user.name ? user.name : "friend"}!
            </p> */}
            <h5 css={profileTitle}>Customer Profile</h5>
            <UserSettings user={user}/>
        </section>
    )
}

export default Settings
