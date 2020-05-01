import { ArrowUpCircle } from "@styled-icons/feather/ArrowUpCircle"
import styled from "styled-components"

const StyledArrowUpCircle = styled(ArrowUpCircle)`
  color: ${(props) => props.theme.colors.primary || "black"};
  cursor: pointer;
  background: transparent;
  margin: 1rem;
`

export const ScrollTop = ({ scrollToTop }) => (
  <StyledArrowUpCircle
    id="scrollTop"
    size="70"
    onClick={() => scrollToTop()}
    style={{ position: "fixed", bottom: 0, right: 0 }}
  />
)
