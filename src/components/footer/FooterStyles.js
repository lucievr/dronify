import { css } from "@emotion/core"

export const footer = css`
    background-color: #101d2c;
    grid-column: full-start / full-end;
    padding: 8rem;
`

export const nav = css`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
    
`

export const navLink = css`
    
    &:link,
    &:visited {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    transition: all .2s;
}
    &:hover,
    &:active {
        background-color: rgba(255, 255, 255, 0.05);
        transform: translateY(-3px);
}
`