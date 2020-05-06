import { Home4 } from "@styled-icons/remix-line/Home4"
import Link from "next/link"
import styled from "styled-components"

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
      <StyledIcon size={48} {...props} />
    </StyledLink>
  </Link>
)
