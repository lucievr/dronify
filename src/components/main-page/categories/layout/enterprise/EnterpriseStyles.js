import { css } from "@emotion/core"

const Background = css`
    background: url("https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-bg-flip.jpg?alt=media&token=8d6d2ed3-88bd-4569-a219-6bc2dd240216");
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
