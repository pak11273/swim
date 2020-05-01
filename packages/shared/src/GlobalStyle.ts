import { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"

export const GlobalStyle = createGlobalStyle`

  ${normalize}

  html, body, * {
    border: none;
    margin: 0;
    padding: 0;
    background-color: white;
  }
`
