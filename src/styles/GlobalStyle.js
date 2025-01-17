import { createGlobalStyle } from "styled-components";
import reset from "reset-css";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    background-color: #FFF;
  }
`;

export default GlobalStyle;
