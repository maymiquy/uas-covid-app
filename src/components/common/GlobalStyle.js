import { createGlobalStyle } from "styled-components";
import theme from "../../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily.poppins}, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  #root {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }
`;

export default GlobalStyle;
