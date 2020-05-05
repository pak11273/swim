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

import { Phone } from "@styled-icons/entypo/Phone"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useState } from "react"

const StyledPhone = styled(Phone)`
  display: none;
  padding-right: 4px;
  color: ${(props) => props.theme.colors.primary};
  ${(props) => props.theme.mq.sm`
   display: block;
 `}
`

const StyledGridArea = styled((props) => <GridArea {...props} />)`
  align-items: center;
  background: ${(props) => props.background || "white"};
  justify-content: center;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  box-shadow: ${(props) =>
    props.shadow === "true" ? "0 4px 8px black" : "none"};
  z-index: 1;
`
const links = [
  // { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
]

const StyledFlex = styled.div`
  padding: ${(props) => props.padding};
  display: flex;
  max-width: 80px;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 300px;
  }
`

export const StyledText = styled.p`
  display: none;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  ${(props) => props.theme.mq.sm`
   display: block;
 `}
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
  const router = useRouter()
  // useOnClickOutside(node, () => setOpen(false))

  return (
    <StyledGridArea gridArea="navbar" id={props.id}>
      <Wrapper padding="1.2rem" maxWidth="1024px">
        <Logo href="/" />
        <StyledFlex ref={node}>
          <Flex width="334px">
            <StyledPhone size={18} md-display="none" />
            <StyledText fontSize="1.3rem" color={`${props.colors.primary}`}>
              903.867.5309
            </StyledText>
          </Flex>
          <StyledBox padding="0 1rem 0 0">
            {links.map((link, i) => {
              let active = router.pathname === link.href
              return (
                <NavBtn
                  key={i}
                  href={link.href}
                  {...router}
                  passHref
                  active={active}
                >
                  {link.label}
                </NavBtn>
              )
            })}
          </StyledBox>
          <XBurger open={open} setOpen={setOpen} />
        </StyledFlex>
      </Wrapper>
      <NavMenu open={open} passHref {...props} links={links} />
    </StyledGridArea>
  )
}
