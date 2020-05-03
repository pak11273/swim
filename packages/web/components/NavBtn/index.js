import Link from "next/link"
import styled from "styled-components"

const animate = "all 0.2s ease-in-out"

const StyledBtn = styled.button`
  cursor: pointer;
  color: ${(props) =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  height: ${(props) => props.height || "16px"};

  text-align: center;
  margin: 0 auto;
  transition: ${animate};
  position: relative;
  &:before {
    background: ${(props) => props.theme.colors.secondary};
    content: "";
    position: absolute;
    bottom: -10px;
    width: ${(props) => (props.active ? "100%" : "0px")};
    opacity: ${(props) => (props.active ? "1" : "0")};
    height: 5px;
    margin: 5px 0 0;
    transition: ${animate};
    transition-duration: 0.75s;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    &:before {
      width: 100%;
      opacity: 1;
    }
  }
`

const StyledA = styled.a`
  text-transform: uppercase;
  color: ${(props) =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const NavBtn = (props) => {
  console.log("props: ", props)
  return (
    <StyledBtn {...props}>
      <StyledA {...props} active={props.active}>
        {props.children}
      </StyledA>
    </StyledBtn>
  )
}
