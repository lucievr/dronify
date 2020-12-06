import { css } from "@emotion/core"

const sectionWrapper = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 200px;
    min-height: 60vh;
    width: 100%;
`

const sectionWrapperCol = css`
    display: flex;
    font-family: "Montserrat", sans-serif !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    min-height: 100vh;
    height: auto;
    width: 100%;
`

const navStyle = css`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const navLink = css`
    text-decoration: none !important;
    font-family: "Montserrat", sans-serif !important;
    color: #fff;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    margin: 1rem;

    &:hover {
        text-decoration: none !important;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: 1100px) {
        letter-spacing: 0.1rem;
    }

    @media screen and (max-width: 750px) {
        font-size: 0.6rem;
    }
`
const homeSection = css`
    background-image: url("https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/phantom-3-se-ii.jpg?alt=media&token=dee7cb3d-b2f9-4be9-810c-00874a193507");
    background-size: cover;
    min-height: 60vh;
    min-width: 50vw;
    margin: 10px 40px;
    opacity: .7;
`

const welcomeMsg = css`
    text-align: left;
    padding: 50px;
    font-size: 1.5rem;
`

const userImg = css`
    border-radius: 50%;
    max-width: 200px;
    max-height: 200px;
`

const settingsSection = css`
    min-height: 60vh;
    min-width: 50vw;
    margin: 10px 40px;
`

const profileTitle = css`
    font-family: "Montserrat", sans-serif !important;
    color: #fff;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem 1.5rem 2rem;
`

const saveBtn = css`
    background-color: #404040;
    margin: 1.5rem;
`

const ordersSection = css`
    min-height: 60vh;
    min-width: 50vw;
    margin: 10px 40px;
`

const viewLink = css`
    color: #b8bfc6;
    &:hover {
        cursor: pointer;
        color: #fff;
    }
`

export {
    sectionWrapper,
    sectionWrapperCol,
    navStyle,
    navLink,
    homeSection,
    welcomeMsg,
    userImg,
    settingsSection,
    profileTitle,
    saveBtn,
    ordersSection,
    viewLink,
}
