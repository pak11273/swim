import Link from "next/link"
import styled from "styled-components"

// import { SVGLogo } from "/assets/images/logo_100x100.svg"

const StyledLink = styled.a``

const StyledIcon = styled((props) => <Home4 {...props} />)`
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const Logo = (props) => (
  <Link href={props.href} passHref>
    <StyledLink>
      <img src="/assets/images/logo_v2.svg" />
    </StyledLink>
  </Link>
)
