import { createGlobalStyle } from "styled-components";
import theme from "../../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily.poppins}, sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #root {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }
`;

export default GlobalStyle;
