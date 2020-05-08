import { Section } from "components"
import styled from "styled-components"

const StyledMasthead = styled((props) => <Section {...props} />)`
  align-items: center;
  background: lightgray;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 100px 15px;
`

export const MastheadServices = (props) => (
  <StyledMasthead
    gridArea="masthead"
    {...props}
    flexDirection="row"
    justifyContent="space-evenly"
  >
    {props.children}
  </StyledMasthead>
)
