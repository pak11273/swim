import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding};
  width: 100%;
  max-width: ${(props) => props.maxWidth};
`
