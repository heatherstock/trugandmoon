import "typeface-baskervville";
import "typeface-work-sans";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    font-family: Baskervville, serif;
    font-size: 16px;
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    overflow-x: hidden;

  }
  h1, h2, h3 {
    font-family: Work Sans, sans serif;
  }
`;