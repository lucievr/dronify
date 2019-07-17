import { css } from "@emotion/core"

export const wrapper = css`
    display: flex;
    flex-direction: column;
`

export const bottom = css`
    display: flex;
    flex-direction: column;
    margin: 10rem auto;
    background: white;
    width: 60%;
    min-height: 65vh;
    -webkit-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.75);
`

export const payformWrapper = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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

export const bottom__heading__title = css``

export const bottom__heading__total = css`
    font-size: 1.2rem;

    span:nth-of-type(2) {
        font-weight: bold;
    }
`

export const item__box = css`
    border-bottom: 1px solid #000;

    td {
        padding: 0;
        height: 5rem;
        text-align: center;
        vertical-align: middle;
    }

    td:last-child {
        color: red;
        font-size: 1.5rem;
        font-weight: bold;
    }
`

export const buttons = css`
    display: flex;
    align-items: center;
    color: #000;
`

export const qty = css`
    height: 2rem;
    width: 2rem;
    margin: 0 0.3rem;
    border-radius: 50%;
`

export const imageStyles = css`
    height: 4rem;
    width: 4rem;
    object-fit: contain;
    margin: 0.5rem;
`

export const deleteItemButton = css`
    background: none;
    border: none;
    color: red;
    margin-right: 1rem;
`

export const emptyCart = css`
    padding: 1.5rem;
`

export const cartButtons = css`
    display: flex;
    justify-content: space-around;

    button {
        margin-bottom: 1rem;
    }
`
