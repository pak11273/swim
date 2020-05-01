import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  padding: ${(props) => props.padding || "14px"};
`
