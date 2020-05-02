import { createGlobalStyle } from "styled-components"
import { lighten } from "polished"
import normalize from "styled-normalize"

export const GlobalStyle = createGlobalStyle`

  ${normalize}

  html, body, * {
    border: none;
    margin: 0;
    outline: none;
    padding: 0;
    background-color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    font-family: 'Oxygen', sans-serif;
    font-family: 'Source Sans Pro', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    background: transparent;
    line-height: 0;
    color: ${(props) => lighten("0.7", props.theme.colors.gray)};
  }

  h1 {
    font-size: 6rem;
    line-height: 6rem;
  }
  h2 {
    font-size: 5rem;
    line-height: 5rem;
  }
  h3 {
    font-size: 4.5rem;
    line-height: 4.5rem;
  }
  h4 {
    font-size: 4rem;
    line-height: 4rem;
  }
  h5 {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  h6 {
    font-size: 3rem;
    line-height: 3rem;
  }

  p {
    background: transparent;
    line-height: 1rem;
  }
`
