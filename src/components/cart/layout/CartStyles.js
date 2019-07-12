import { css } from "@emotion/core"

export const wrapper = css`
    display: flex;
    flex-direction: column;
`

export const top = css`
    margin: 2rem auto;
    padding: 2rem;
    width: 80%;
    height: 4rem;
`

export const top_button = css`
    margin: 2rem;
    color: #fff;

    &:hover {
        text-decoration: none;
        color: #fff;
    }
`

export const bottom = css`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 60%;
    -webkit-box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 23px 1px rgba(0,0,0,0.75);
`

export const bottom__heading = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background: #232323;
    padding: 2rem;
    text-transform: uppercase;
`

export const bottom__heading__title = css`
`

export const bottom__heading__total = css`
    font-size: 1.2rem;

    span:nth-child(2) {
        font-weight: bold;
    }
`

export const item__box = css`
    padding: 2rem;
    border-bottom: 1px solid #000;

    td:last-child {
        color: red;
        font-size: 1.5rem;
        font-weight: bold;
    }
`

export const qty = css`
    background: grey;
    color: #fff;
    display: inline-block;
    height: 1rem;
    width: 1rem;
    padding: .5rem;
    margin: 0 .5rem;
    border-radius: 10rem;
`