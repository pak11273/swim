import {
  Box,
  Flex,
  GridArea,
  Logo,
  NavBtn,
  NavMenu,
  Text,
  Wrapper,
  XBurger,
} from "components"

import Link from "next/link"
import { Phone } from "@styled-icons/entypo/Phone"
import styled from "styled-components"
import { useState } from "react"

const StyledPhone = styled(Phone)`
  padding-right: 4px;
  color: ${(props) => props.theme.colors.primary};
`

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
  { label: "Services", href: "#About" },
  { label: "Contact", href: "/contact" },
]

const StyledFlex = styled.div`
  padding: ${(props) => props.padding};
  display: flex;
  max-width: 80px;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 380px;
  }
`
const StyledBox = styled(Box)`
  align-items: center;
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
          <Flex>
            <StyledPhone size={18} />
            <Text
              style={{
                fontSize: "1.3rem",
                color: `${props.colors.primary}`,
              }}
              xs={{ display: "none" }}
            >
              903.867.5309
            </Text>
          </Flex>
          <StyledBox padding="0 1rem 0 0">
            {links.map((link, i) => (
              <NavBtn key={i} height="16px">
                {link.label}
              </NavBtn>
            ))}
          </StyledBox>
          <XBurger open={open} setOpen={setOpen} />
        </StyledFlex>
      </Wrapper>
      <NavMenu open={open}>
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <a>{link.label}</a>
          </Link>
        ))}
      </NavMenu>
    </StyledGridArea>
  )
}
