import { css } from "@emotion/core"

const GlobalStyles = css`

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Gotham Book', 'Arial', sans-serif;
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
    background-color: #666666;
  }

  @font-face {
    font-family: 'Gotham Book';
    font-style: normal;
    font-weight: normal;
    src: local('Gotham Book'), url('../fonts/gotham/GothamBook.woff') format('woff');
    }
`
export default GlobalStyles
