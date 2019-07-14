import { css } from "@emotion/core"

const Background = css`
    background: url("https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/professional-drones%2Fprofessional-bg.jpg?alt=media&token=6eb4503c-ccb8-4f7e-9562-10bd22eae7a8");
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
