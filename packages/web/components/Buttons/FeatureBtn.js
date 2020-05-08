import Link from "next/link"
import styled from "styled-components"

const StyledBtn = styled.button`
  background: ${(props) => props.theme.colors.primary || props.background};
  border-radius: 5px;
  cursor: pointer;
  display: block;
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
  padding: ${(props) => props.padding || ".8rem 1.8rem"};
  a {
    color: white;
    font-size: ${(props) => props.fontSize || "1.5rem"};
    text-transform: uppercase;
    text-decoration: none;
  }
  position: absolute;
  bottom: -40px;
  left: 18px;
  height: 53px;
  min-width: 109px;
`

export const FeatureBtn = (props) => (
  <StyledBtn>
    <a href={props.link}>{props.children}</a>
  </StyledBtn>
)
