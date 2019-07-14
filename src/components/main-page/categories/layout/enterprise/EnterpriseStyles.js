import { css } from "@emotion/core"

const Background = css`
    background: url('https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-bg-flip.jpg?alt=media&token=8d6d2ed3-88bd-4569-a219-6bc2dd240216');
    background-size: cover;
    height: 100%;
`
const Item = css`
    flex: 1 1 50%;
`

const Content = css`
    display: flex;
    align-items: center;

    height: 100%;
`

const Image = css`
    width: 80%;
`

export default Background

export { Item, Content, Image }