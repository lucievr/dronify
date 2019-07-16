import { css } from "@emotion/core"

const Background = css`
    background: url("https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/drone-3453361_1280uflip.jpg?alt=media&token=c412ca6a-ed03-41fb-baf0-78383f0f0e83");
    background-size: cover;
    height: 100%;
`
const Item = css`
    flex: 1 1 50%;
`

const Content = css`
    position: relative;
    display: flex;
    align-items: center;
    height: 92%;
`

const Image = css`
    width: 80%;
`

export default Background

export { Item, Content, Image }
