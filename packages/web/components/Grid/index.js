import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  background: ${(props) => props.bg || props.theme.bg};
  grid-template-areas:
    "navbar"
    "masthead"
    "main"
    "services"
    "footer";
  grid-template-columns: "auto";
  grid-template-rows: "auto";
  max-width: ${(props) => props.maxWidth || "100%"};
`
