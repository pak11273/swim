import styled from "styled-components"

export const Flex = styled.div`
  background: ${(props) => props.background || "transparent"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems || "center"};
  padding: ${(props) => props.padding || "14px"};
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth};
`
