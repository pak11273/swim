import styled from "styled-components"

// thing: ${props=>props.thing};
export const Line = styled.hr`
  height: ${(props) => props.height || "5px"};
  margin: ${(props) => props.margin || "0 auto"};
  width: ${(props) => props.width || "5%"};
  background: ${(props) => props.theme.colors.primary || props.background};
`
