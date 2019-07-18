import { css } from "@emotion/core"

export const NavBar = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;

    height: 7rem;
    width: 100%;
    padding-top: 0.9rem;

    /* background: #222; */
`

export const NavMenuTop = css`
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 0 1.5rem;
`

export const ButtonWrapper = css`
    flex: 1 1 20%;
`

export const LogoName = css`
    flex: 1 1 60%;
    font-size: 1.5rem;
    color: #fff;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif !important;
    padding-top: .5rem;

    @media screen and (max-width: 420px) {
        display: none;
    }
`

export const Icons = css`
    flex: 1 1 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div:first-of-type {
        margin-right: 1rem;
    }
`

export const NavList = css`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding-top: 1rem;
    width: 70%;

    @media screen and (max-width: 1100px) {
        width: 90%;
    }

    @media screen and (max-width: 550px) {
        display: none;
    }
`

export const IconItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: "Montserrat", sans-serif !important;
`

export const NavItem = css`
    list-style-type: none !important;
`

export const NavLink = css`
    text-decoration: none !important;
    font-family: "Montserrat", sans-serif !important;
    color: #fff;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 0.85rem;

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
