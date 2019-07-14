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

const navStyle = css`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const navLink = css`
    text-decoration: none !important;
    font-family: "Montserrat", sans-serif !important;
    color: #000;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    margin: 1rem;

    &:hover {
        text-decoration: none !important;
        color: #fff !important;
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
    background-image: url("https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se-ii.jpg?alt=media&token=9d80bf06-1938-4813-9314-d0c7362e72da");
    background-size: cover;
    min-height: 60vh;
    min-width: 50vw;
    margin: 10px 40px;
`

const welcomeMsg = css`
    text-align: left;
    padding: 50px;
    font-size: 1.5rem;
`

const settingsSection = css`
    min-height: 60vh;
    min-width: 50vw;
    margin: 10px 40px;
`

const profileTitle = css`
    font-family: "Montserrat", sans-serif !important;
    color: #000;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    margin: 1.5rem 1rem;
`

const ordersSection = css`
    min-height: 60vh;
    min-width: 50vw;
    margin: 10px 40px;
`

export {
    sectionWrapper,
    navStyle,
    navLink,
    homeSection,
    welcomeMsg,
    settingsSection,
    profileTitle,
    ordersSection,
}
