import { ContactForm, Grid, Layout, Section, Wrapper } from "components"

import styled from "styled-components"

const StyledMasthead = styled(Section)`
  height: 900px;
  padding: 0 20px;
  overflow: hidden;
  background: lightcoral
    url("assets/images/darren-miller-F0MmnUS2fwc-unsplash.jpg") center/cover;
  grid-area: ${(props) => props.gridArea};
  align-items: center;
  justify-content: center;
  text-align: left;
`
const StyledMap = styled(Section)`
  height: 100%;
  padding: 20px;
  ${(props) => props.theme.mq.sm`
    padding: 0 80px;
  `}
  background: url("assets/images/gray-map.jpg") center/cover;
  background-attachment: fixed;
`
const Contact = (props) => (
  <Layout title="DP PoolCare | Contact" {...props}>
    <Grid areas={["masthead", "map", "footer"]}>
      <StyledMasthead gridArea="masthead">
        <Wrapper
          alignItems="flex-start"
          maxWidth="1240px"
          flexDirection="column"
        >
          <h4 style={{ textShadow: "0 5px 5px gray" }}>Have Questions?</h4>
          <h6 style={{ textTransform: "none", textShadow: "0 5px 5px gray" }}>
            Give us a call
          </h6>
          <h6 style={{ textTransform: "none", textShadow: "0 5px 5px gray" }}>
            or send a message below
          </h6>
        </Wrapper>
      </StyledMasthead>
      <StyledMap gridArea="map">
        <ContactForm />
      </StyledMap>
    </Grid>
  </Layout>
)
export default Contact
