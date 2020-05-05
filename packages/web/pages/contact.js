import { Box, Grid, Layout, Section, Wrapper } from "components"

import styled from "styled-components"

const StyledMasthead = styled(Section)`
  height: 900px;
  background: lightcoral
    url("assets/images/darren-miller-F0MmnUS2fwc-unsplash.jpg") center/cover;
  grid-area: ${(props) => props.gridArea};
  align-items: center;
  justify-content: center;
`

const StyledMap = styled(Section)`
  height: 600px;
  background: url("assets/images/gray-map.jpg") center/cover;
`
const Contact = (props) => (
  <Layout title="DP PoolCare | Contact" {...props}>
    <Grid areas={["masthead", "form", "map", "footer"]}>
      <StyledMasthead gridArea="masthead">
        <Wrapper maxWidth="1240px" flexDirection="column">
          <h3>Contact Us</h3>
          <h4>Need more details?</h4>
          <h6>Send a text or email</h6>
        </Wrapper>
      </StyledMasthead>
      <StyledMap gridArea="map"></StyledMap>
    </Grid>
  </Layout>
)
export default Contact
