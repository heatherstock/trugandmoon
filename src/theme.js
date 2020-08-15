import "typeface-baskervville";
import "typeface-work-sans";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    font-family: Baskervville, serif;
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
    color: #0f1433;

  }
  h1, h2, h3 {
    font-family: Work Sans, sans serif;
    color: #154726;
  }
`;