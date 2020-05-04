import { Box, Grid, Layout, Section } from "components"

import styled from "styled-components"

const StyledMasthead = styled(Section)`
  grid-area: ${(props) => props.gridArea};
  align-items: center;
  justify-content: center;
`
const Contact = (props) => (
  <Layout title="DP Pools | Contact" {...props}>
    <Grid areas={["masthead", "form", "footer"]}>
      <StyledMasthead gridArea="masthead">
        <Box>
          <h3>Contact Us</h3>
          <h2>Let's Chat</h2>
          <h4>Need more details?</h4>
          <h6>Dallas/FtWorth</h6>
        </Box>
      </StyledMasthead>
      <div
        style={{
          background: "blue",
          gridArea: "form",
          width: "100vw",
          height: "900px",
        }}
      >
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
        <h1>Contact Page</h1>
      </div>
    </Grid>
  </Layout>
)
export default Contact
