import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  background: ${(props) => props.bg || props.theme.bg};
  grid-template-areas:
    "navbar"
    "main"
    "footer"
    "masthead";
  grid-template-columns: "auto";
  grid-template-rows: "auto";
  max-width: ${(props) => props.maxWidth || "100%"};
`
// grid-template-areas:
//   "nav nav nav"
//   "asideLeft main asideRight"
//   "footer footer footer";
// grid-template-rows: 1fr 9fr 1fr;
// grid-template-columns: 1fr 6fr 1fr;k
