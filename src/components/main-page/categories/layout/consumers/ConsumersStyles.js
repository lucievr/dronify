import { css } from "@emotion/core"

const Background = css`
    background: url("https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fconsumer-bg.jpg?alt=media&token=cfc4edd7-df2c-4904-ba22-23a0fe7c3723");
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

const subHeadingRight = css`
    color: white;
    font-weight: 300;
    letter-spacing: 1px;
    margin: calc(10px + 2vw);
    margin-right: calc(20px + 3vw);
`

const Image = css`
    width: calc(250px + 16vw);
    margin: calc(20px + 4vw);
    margin-bottom: 0; 
`

export default Background

export { Item, Content, Image, subHeadingRight }
