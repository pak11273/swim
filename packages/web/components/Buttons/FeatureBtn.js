import Link from "next/link"
import styled from "styled-components"

const StyledBtn = styled.button`
  background: ${(props) => props.theme.colors.primary || props.background};
  border-radius: 5px;
  cursor: pointer;
  display: block;
  padding: ${(props) => props.padding || ".8rem 1.8rem"};
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
  a {
    color: white;
    font-size: ${(props) => props.fontSize || "1.5rem"};
    text-transform: uppercase;
    text-decoration: none;
  }
  position: relative;
  margin: 20px auto;
  height: 53px;
  min-width: 109px;
  ${(props) => props.theme.mq.sm`
    margin: 0 auto 80px;
    position: ${(props) => props.position || "absolute"};
    bottom: -120px;
    bottom: ${(props) => props.bottombtn};
    left: ${(props) => props.left || "18px"};
  `}
`

export const FeatureBtn = (props) => (
  <StyledBtn {...props}>
    <a href={props.link}>{props.children}</a>
  </StyledBtn>
)
