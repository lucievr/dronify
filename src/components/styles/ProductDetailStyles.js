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
`

export const btnBuy = css`
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif !important;
  background-color: transparent;
  border: 2px solid #4d4d4d;
  padding: .7rem 2.5rem;
  margin: 1rem;
  border-radius: 5rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`