import { css } from "@emotion/core"

const Background = css`
    background: url("https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/drone-3453361_1280uflip.jpg?alt=media&token=e222db86-88e0-4603-8b25-3ce616d5c321");
    background-size: cover;
    height: 100%;
`
const Item = css`
    flex: 1 1 50%;
`

const Content = css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const subHeadingLeft = css`
    color: white;
    font-weight: 300;
    letter-spacing: 1px;
    margin: calc(10px + 2vw);
    margin-left: calc(20px + 3vw);
`

export default Background

export { Item, Content, subHeadingLeft }
