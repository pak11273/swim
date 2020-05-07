import { lighten } from "polished"
import styled from "styled-components"

export const Input = styled.input`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  background: ${lighten(0.1, "lightgray")};
  display: block;
  padding: ${(props) => props.padding || "1rem"};
  width: 100%;
`
