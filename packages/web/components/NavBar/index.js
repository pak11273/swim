import { Box, Flex, GridArea, Logo, NavBtn, NavMenu, XBurger } from "components"

import { ThreeBars } from "@styled-icons/octicons/ThreeBars"
import styled from "styled-components"

const StyledGridArea = styled((props) => <GridArea {...props} />)`
  align-items: center;
  background: ${(props) => props.background || "white"};
  justify-content: space-between;
  position: fixed;
  width: 100%;
`
const StyledThreeBars = styled(ThreeBars)`
  color: ${(props) => props.color || props.theme.colors.primary};
`

const links = [
  { label: "About Us", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Pricing", href: "/" },
]

export const NavBar = (props) => (
  <StyledGridArea gridArea="navbar">
    <Logo href="/" />
    <Flex>
      <Box>
        {links.map((link, i) => (
          <NavBtn key={i}>{link.label}</NavBtn>
        ))}
      </Box>
      <XBurger />
    </Flex>
    <NavMenu>
      {links.map((link, i) => (
        <a key={i} href={link.href}>
          {link.label}
        </a>
      ))}
    </NavMenu>
  </StyledGridArea>
)
