import { css } from "@emotion/core"

const GlobalStyles = css`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Montserrat", sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-size: calc(11px + 0.5vw);
        line-height: 1.5;
        word-wrap: break-word;
        background-color: rgb(128, 141, 153);
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .icon-style {
        margin: 5px;
        margin-bottom: -7px;
    }

    footer {
        text-align: center;
    }
`

const DarkOverlay = css`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export default GlobalStyles

export { DarkOverlay }
