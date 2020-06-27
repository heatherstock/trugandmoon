import "typeface-baskervville";
import "typeface-work-sans";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    @media (max-width: 600px) {
      padding: 0 18px;
    }
    @media (min-width: 600px) {
      padding: 0 36px;
    }
    margin: auto;
    font-family: Baskervville, serif;
    font-size: 16px;
    position: relative;
    min-height: 100vh;
    max-width: 1440px;
    overflow-x: hidden;

  }
  h1, h2, h3 {
    font-family: Work Sans, sans serif;
  }
`;