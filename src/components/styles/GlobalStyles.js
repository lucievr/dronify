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
        font-size: calc(12px + 0.4vw);
        line-height: 1.5;
        word-wrap: break-word;
        background-repeat: no-repeat;
        background: #0F2027;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    .icon-style.arrow {
        color: white;
    }

    div.modali-content div.modali-header div.modali-title {
        margin-left: auto;
    }


    span.icon.close svg.icon-style {
        color: #4d4d4d;
        float: right;
        width: 4rem;
        height: 4rem;
    }

    span.icon.close:hover,
    span.icon.close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
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
        color: #fff;
    }

    span.carouselIcon svg.icon-style {
        color: rgba(255,255,255,0.8);
        width: 4rem;
        height: 4rem;
        stroke-width: 1;
        margin: 10px 15px 18px 10px;
        border-radius: 50%;
    }

    span.carouselIcon svg.icon-style:hover {
        background-color: rgba(0, 0, 0, 0.06);
    }

    span.specIcon svg.icon-style {
        color: #badb57;
    }

    span.iconDiv svg.icon-style {
        color: white;
        width: 23px;
        height: 23px;
        margin: 0 10px 3px 10px;
    }
    span.iconDiv.login svg.icon-style {
        color: #badb57;
    }

    span.iconName {
        font-size: calc(12px + 0.2vw);
        letter-spacing: 1px;
    }

    div.rccs {
        width: 50%;
        margin: 0;
    }

    div.rccs__card--front {
        /* margin: 3rem 0; */
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
        width: 6rem;
        height: 6rem;
        display: block;
        margin: 5rem auto 3rem;
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

    img.droneIcon {
        margin: 5rem auto 2rem;
    }
`

const DarkOverlay = css`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export default GlobalStyles

export { DarkOverlay }
