import {
  Box,
  Flex,
  GridArea,
  Logo,
  NavBtn,
  NavMenu,
  Wrapper,
  XBurger,
} from "components"

import styled from "styled-components"

const StyledGridArea = styled((props) => <GridArea {...props} />)`
  align-items: center;
  background: ${(props) => props.background || "white"};
  justify-content: center;
  margin: 0 auto;
  padding: 1.2rem;
  position: fixed;
  width: 100%;
`
const links = [
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
]

const StyledBox = styled(Box)`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`

export const NavBar = (props) => (
  <StyledGridArea gridArea="navbar">
    <Wrapper maxWidth="1024px">
      <Logo href="/" />
      <Flex>
        <StyledBox padding="0 1rem 0 0">
          {links.map((link, i) => (
            <NavBtn key={i}>{link.label}</NavBtn>
          ))}
        </StyledBox>
        <XBurger />
      </Flex>
    </Wrapper>
    <NavMenu>
      {links.map((link, i) => (
        <a key={i} href={link.href}>
          {link.label}
        </a>
      ))}
    </NavMenu>
  </StyledGridArea>
)
