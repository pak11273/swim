import { createGlobalStyle } from "styled-components"

/* color: ${(props) => props.theme.colors.background}; */
export const GlobalStyle = createGlobalStyle`
  html, body, * {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};
  }
`
