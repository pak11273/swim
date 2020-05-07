import styled from "styled-components"

export const Label = styled.label`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  background: none;
  display: block;
  padding: ${(props) => props.padding || "1rem"};
`
