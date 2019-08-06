import { css } from "@emotion/core"

export const wrapper = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const bottom = css`
    display: flex;
    flex-direction: column;
    margin: 10rem auto;
    background: #f5f5f5;
    font-family: "Montserrat", sans-serif !important;
    width: 70%;
    -webkit-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.75);
`

export const payformWrapper = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const bottom__heading = css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: #fff;
    background: #6b757d;
    padding: 0.5rem 2rem 2rem 2rem;
    text-transform: uppercase;
`

export const bottom__heading__wrapper = css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
`

export const bottom__heading__title = css`
    margin-bottom: 0;
`

export const bottom__heading__total = css`
    font-size: 1.2rem;
    margin-left: auto;
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
    padding-left: 2rem;
`

export const qty = css`
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.3rem;
    border-radius: 50% !important;
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

export const formGroup = css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    flex: 1 1 60%;
`

export const cardStyles = css`
    padding: 2rem;
    flex: 1 1 40%
`

export const formWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
