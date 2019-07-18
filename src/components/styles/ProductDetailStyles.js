import { css } from "@emotion/core"

export const carouselWrapper = css`
    width: 70%;
    margin: 0 auto;
`

export const descriptionStyle = css`
    line-height: 1.7;
`

export const specWrapper = css`
    display: flex;
    flex-wrap: no-wrap;
    align-items: flex-start;
    justify-content: space-evenly;
`

export const column = css`
    align-self: left;
    text-align: left;
    word-wrap: break-word;
    margin: 10px;
`

export const specText = css`
    margin: 0;
    color: #fff;
    font-weight: 500;
`

export const btnBuy = css`
  color: #badb57;
  font-family: "Montserrat", sans-serif !important;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid #badb57;
  padding: .7rem 2.5rem;
  margin: 1rem;
  border-radius: 5rem;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(186, 219, 87, 0.5);
    border: 2px solid rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }
`