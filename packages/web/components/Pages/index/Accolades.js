import { Section, Wrapper } from "components"

import { lighten } from "polished"
import styled from "styled-components"

const StyledAccolades = styled((props) => <Section {...props} />)`
  flex-direction: row;
  justify-content: space-evenly;
  height: 120px;
  background: ${({ theme }) => theme.colors.bg1};
  img {
    background: transparent;
    height: 20px;
  }
  ${({ theme }) => theme.mq.md`
  height: 220px;
      img {
        height: 80px;
      }
    `}
`
const StyledWrapper = styled((props) => <Wrapper {...props} />)`
  background: transparent;
  ${(props) => props.theme.mq.md`
      max-width: 800px
    `}
`

export const Accolades = (props) => (
  <StyledAccolades {...props}>
    <StyledWrapper {...props}>
      <img src="assets/images/accolades/angielist.png" />
      <img src="assets/images/accolades/nspf.png" />
      <img src="assets/images/accolades/super.png" />
      <img src="assets/images/accolades/ipssa.png" />
      <img src="assets/images/accolades/contractor.png" />
    </StyledWrapper>
  </StyledAccolades>
)
