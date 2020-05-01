import { Home4 } from "@styled-icons/remix-line/Home4"
import Link from "next/link"
import styled from "styled-components"

const StyledLink = styled.a`
  color: blue;
`

const StyledIcon = styled(Home4)`
  color: ${(props) => props.theme.colors.primary};
`

export const Logo = ({ href }) => (
  <Link href={href} passHref>
    <StyledLink>
      <StyledIcon size={48} />
    </StyledLink>
  </Link>
)
