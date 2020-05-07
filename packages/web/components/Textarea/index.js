import { lighten } from "polished"
import styled from "styled-components"

export const Textarea = styled.textarea`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  background: ${lighten(0.1, "lightgray")};
  display: block;
  height: ${(props) => props.height || "100vh"};
  padding: ${(props) => props.padding || "1rem"};
  width: 100%;
`
