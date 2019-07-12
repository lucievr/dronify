import { css } from "@emotion/core"

const Background = css`
    background: url('https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-drones%2Fenterprise-bg.jpg?alt=media&token=414ecf5a-7aeb-4a24-a620-0e93e535ad17');
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