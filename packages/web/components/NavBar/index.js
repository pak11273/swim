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
import { useState } from "react"

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

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export const NavBar = (props) => {
  const [open, setOpen] = useState(false)
  const node = React.useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <StyledGridArea gridArea="navbar">
      <Wrapper maxWidth="1024px">
        <Logo href="/" />
        <Flex ref={node}>
          <StyledBox padding="0 1rem 0 0">
            {links.map((link, i) => (
              <NavBtn key={i}>{link.label}</NavBtn>
            ))}
          </StyledBox>
          <XBurger open={open} setOpen={setOpen} />
        </Flex>
      </Wrapper>
      <NavMenu open={open}>
        {links.map((link, i) => (
          <a key={i} href={link.href}>
            {link.label}
          </a>
        ))}
      </NavMenu>
    </StyledGridArea>
  )
}
