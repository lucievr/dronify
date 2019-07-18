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
  width: 37rem;
`

export const card = css`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  height: 40rem;
  margin: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 10px;
  transition: transform 0.7s;

  &:hover {
        transform: translateY(-1.5rem) scale(1.05);
    }
`

export const imageWrapper = css`
  width: 100%;
  height: auto;
  margin-bottom: calc(5px + 3vh);
`

export const textWrapper = css`
  font-family: "Montserrat", sans-serif !important;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const productTitle = css`
  color: #badb57;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 1rem;
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

export const buttonCartStyle = css`
  color: #badb57;
  font-family: "Montserrat", sans-serif !important;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid #badb57;
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