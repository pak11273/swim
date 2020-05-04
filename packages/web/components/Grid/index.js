import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  background: ${(props) => props.bg || props.theme.bg};
  grid-template-areas: ${(props) =>
    props.areas
      ? props.areas.reduce((acc, v) => (acc += `${"'" + v + "'" + "\n"}`), ``) +
        ";"
      : "none"};
  grid-template-columns: auto;
  grid-template-rows: auto;
  max-width: ${(props) => props.maxWidth || "none"};
`
