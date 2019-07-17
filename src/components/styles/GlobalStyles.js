import { css } from "@emotion/core"

const GlobalStyles = css`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Montserrat", sans-serif !important;
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

    .icon-style.arrow {
        color: white;
    }

    a {
        text-decoration: none !important;
        color: #000;
    }

    button:focus {
        outline: none;
    }

    .icon-style {
        margin: 10px;
    }

    span.account-icon svg.icon-style {
        width: 25px;
        height: 25px;
        margin: 10px 15px 18px 10px;
    }

    span.iconDiv svg.icon-style {
        color: white;
        width: 23px;
        height: 23px;
        margin: 0 10px 3px 10px;
    }

    span.iconName {
        font-size: calc(8px + 0.4vw);
        letter-spacing: 1px;
    }

    div.rccs {
        width: 50%;
    }

    div.rccs__card--front {
        margin: 3rem 0;
    }

    div.rccs__card--back {
        margin: 3rem 0;
    }

    footer {
        text-align: center;
        background-color: transparent;
        margin-bottom: 1rem;
    }

    .loaded svg {
        width: 100px;
        display: block;
        margin: 40px auto 0;
    }

    .path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 0;
        &.circle {
            -webkit-animation: dash 0.9s ease-in-out;
            animation: dash 0.9s ease-in-out;
        }
        &.line {
            stroke-dashoffset: 1000;
            -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
            animation: dash 0.9s 0.35s ease-in-out forwards;
        }
        &.check {
            stroke-dashoffset: -100;
            -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
            animation: dash-check 0.9s 0.35s ease-in-out forwards;
        }
    }

    p.svg {
        text-align: center;
        margin: 20px 0 60px;
        font-size: 1.25em;
    }

    @-webkit-keyframes dash {
        0% {
            stroke-dashoffset: 1000;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 1000;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @-webkit-keyframes dash-check {
        0% {
            stroke-dashoffset: -100;
        }
        100% {
            stroke-dashoffset: 900;
        }
    }

    @keyframes dash-check {
        0% {
            stroke-dashoffset: -100;
        }
        100% {
            stroke-dashoffset: 900;
        }
    }
`

const DarkOverlay = css`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export default GlobalStyles

export { DarkOverlay }
