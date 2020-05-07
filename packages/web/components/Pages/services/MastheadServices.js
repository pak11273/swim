import { Section } from "components"
import styled from "styled-components"

const StyledMasthead = styled((props) => <Section {...props} />)`
  align-items: center;
  background: lightcoral;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  padding: 0 15px;
`

export const MastheadServices = (props) => (
  <StyledMasthead gridArea="masthead" {...props} flexDirection="row">
    {props.children}
  </StyledMasthead>
)
