import styled from "styled-components"

export const Flex = styled.div`
  display: none;
  align-items: ${(props) => props.alignItems || "center"};
  padding: ${(props) => props.padding || "14px"};
  @media (min-width: 640px) {
    display: flex;
  }
`
