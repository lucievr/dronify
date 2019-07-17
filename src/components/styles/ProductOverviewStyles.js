import { css } from "@emotion/core"

export const contentWrapper = css`
  text-align: center;
  margin-top: 200px;
`

export const categoryTitle = css`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  margin: 30px;
`

export const cardsWrapper = css`
  width: 100%;
  max-width: 1512px;
  margin: 0 auto 50px auto;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
`

export const cardList = css`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const card = css`
  min-width: 450px;
  min-height: 500px;
  margin: 30px;
  color: grey;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const imageWrapper = css`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`

export const textWrapper = css`
  font-family: "Montserrat", sans-serif !important;
  padding: 0 20px;
  text-align: center;
  color: black;
`
export const productTitle = css`
  color: white;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 20px;
`

export const buttonStyle = css`
  color: #fff;
  font-family: "Montserrat", sans-serif !important;
  background-color: transparent;
  border: 2px solid #fff;
  padding: 1rem 1rem;
  margin: 1rem;
  border-radius: 5rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`