import styled from "styled-components"

export const Flex = styled.div`
  background: ${(props) => props.background || "transparent"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding || "14px"};
  position: ${(props) => props.position};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
`
