import React from "react"
import { settingsSection, profileTitle } from "../styles/AccountStyles"
import UserSettings from "./SettingsForm"

const Settings = (props) => {
    return (
        <section css={settingsSection}>
            <h5 css={profileTitle}>Customer Profile</h5>
            <UserSettings user={props.user} handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
        </section>
    )
}

export default Settings
