import { css } from "@emotion/core"

const Background = css`
    background: url('https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fconsumer-bg.jpg?alt=media&token=cfc4edd7-df2c-4904-ba22-23a0fe7c3723');
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