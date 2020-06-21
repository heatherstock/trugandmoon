import "typeface-baskervville";
import "typeface-work-sans";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Baskervville, serif;
  }
  h1, h2, h3 {
    font-family: Work Sans, sans serif;
  }
`;