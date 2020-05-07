import { lighten } from "polished"
import styled from "styled-components"

export const ContactBtn = styled.button`
  font-size: ${(props) => props.fontSize || "1.5rem"};
  background: ${(props) => props.theme.colors.primary || props.background};
  border-radius: 5px;
  display: block;
  padding: ${(props) => props.padding || ".8rem 1.8rem"};
  color: white;
  position: absolute;
  bottom: 40px;
  right: 40px;
`
