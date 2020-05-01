import styled from "styled-components"

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
`
