import { css } from "@emotion/core"

const Background = css`
    background: url("https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/enterprise-bg-flip.jpg?alt=media&token=8e62633d-dda8-48d8-bb08-f70f55ff7ecd");
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
