import { darken } from "polished"
import styled from "styled-components"

const animate = "all 0.2s ease-in-out"
export const NavBtn = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  padding: 0 1rem;
  text-transform: uppercase;

  text-align: center;
  margin: 0 auto;
  transition: ${animate};
  position: relative;
  &:before {
    background: ${(props) => props.theme.colors.primary};
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0px;
    height: 5px;
    margin: 5px 0 0;
    transition: ${animate};
    transition-duration: 0.75s;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    &:before {
      width: 75%;
      opacity: 1;
    }
  }
`

// background-color: ${darken(0.5, "#ff0000")};
