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
  box-shadow: ${(props) =>
    props.shadow === "true" ? "0 4px 8px black" : "none"};
`
const links = [
  { label: "Sales", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
]

const StyledFlex = styled.div`
  padding: ${(props) => props.padding};
  display: flex;
  max-width: 80px;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 280px;
  }
`
const StyledBox = styled(Box)`
  display: none;
  justify-content: space-evenly;
  width: 100%;
  @media (min-width: 640px) {
    display: flex;
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
    <StyledGridArea gridArea="navbar" id={props.id}>
      <Wrapper maxWidth="1024px">
        <Logo href="/" />
        <StyledFlex ref={node}>
          <StyledBox padding="0 1rem 0 0">
            {links.map((link, i) => (
              <NavBtn key={i}>{link.label}</NavBtn>
            ))}
          </StyledBox>
          <XBurger open={open} setOpen={setOpen} />
        </StyledFlex>
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
