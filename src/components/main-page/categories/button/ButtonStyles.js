import { css } from "@emotion/core"

const buttonStyles = css`
    text-transform: uppercase;
    padding: 1rem 3rem;
    margin: 3rem;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    display: inline-block;
    border-radius: 10px;
    transition: all 0.2s;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 1rem 2rem rgba(#000, 0.1);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(#000, 0.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }

        &:active,
        &:focus {
            outline: none;
            transform: translateY(-1px);
            box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
        }
    }
`

export const backToTop = css`
    position: absolute;
    bottom: 0;
    right: 0;
    text-transform: uppercase;
    padding: 1rem 3rem;
    margin: 2rem;
    font-size: 8px;
    letter-spacing: 0.2rem;
    display: inline-block;
    border-radius: 10px;
    transition: all 0.2s;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 1rem 2rem rgba(#000, 0.1);
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(#000, 0.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }

        &:active,
        &:focus {
            outline: none;
            transform: translateY(-1px);
            box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
        }
    }
`

export default buttonStyles
