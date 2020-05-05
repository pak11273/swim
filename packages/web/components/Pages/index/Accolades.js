import { Section, Wrapper } from "components"

import { lighten } from "polished"
import styled from "styled-components"

const StyledAccolades = styled((props) => <Section {...props} />)`
  flex-direction: row;
  justify-content: space-evenly;
  height: 200px;
  background: ${(props) => lighten(0.55, props.theme.colors.primary)};
  img {
    background: transparent;
    height: 20px;
  }
  ${({ theme }) => theme.mq.sm`
      img {
        height: 80px;
      }
      > div {
        max-width: 640px;
      }
    `}
  ${({ theme }) => theme.mq.md`
      img {
        height: 80px;
      }
      > div {
        max-width: 1240px;
      }
    `}
`
const StyledWrapper = styled((props) => <Wrapper {...props} />)`
  ${({ theme }) => theme.mq.md`
    width: 800px;
  `}
`

export const Accolades = () => (
  <StyledAccolades>
    <StyledWrapper maxWidth="100px">
      <img src="assets/images/accolades/angielist.png" />
      <img src="assets/images/accolades/nspf.png" />
      <img src="assets/images/accolades/super.png" />
      <img src="assets/images/accolades/ipssa.png" />
      <img src="assets/images/accolades/contractor.png" />
    </StyledWrapper>
  </StyledAccolades>
)
