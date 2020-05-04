import styled from "styled-components"

export const Section = styled.div`
  grid-area: ${(props) => props.gridArea};
  background: ${(props) => props.background || "transparent"};
  align-items: ${(props) => props.alignItems || "center"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  height: 900px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  h3 {
    font-family: "Source Sans Pro", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
  }
`
