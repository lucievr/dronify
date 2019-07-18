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

const Image = css`
    width: calc(250px + 16vw);
    margin: calc(20px + 4vw);
    margin-top: 0; 
`

export default Background

export { Item, Content, Image, subHeadingLeft }
