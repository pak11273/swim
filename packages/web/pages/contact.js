import { Box, Grid, Layout, Section } from "components"

import styled from "styled-components"

const StyledMasthead = styled(Section)`
  background: blue;
  grid-area: ${(props) => props.gridArea};
  align-items: center;
  justify-content: center;
`

const StyledMap = styled(Section)`
  height: 600px;
  background: url("assets/images/gray-map.jpg") center/cover;
`
const Contact = (props) => (
  <Layout title="DP Pools | Contact" {...props}>
    <Grid areas={["masthead", "form", "map", "footer"]}>
      <StyledMasthead gridArea="masthead">
        <Box>
          <h3>Contact Us</h3>
          <h2>For more information please send us an email or text</h2>
          <h4>Need more details?</h4>
          <h6>Dallas/FtWorth</h6>
        </Box>
      </StyledMasthead>
      <StyledMap gridArea="map"></StyledMap>
    </Grid>
  </Layout>
)
export default Contact
