import { Box, Section } from "components"

import styled from "styled-components"

const StyledBox = styled(Box)`
  display: none;
  position: absolute;
  bottom: 33px;
  right: 20%;
  img {
    height: 700px;
    background: transparent;
  }
  ${(props) => props.theme.mq.md`
    right: 5%;
    display: block;
  `}
  ${(props) => props.theme.mq.xl`
    right: 15%;
  `}
  ${(props) => props.theme.mq.xxl`
    right: 25%;
  `}
`

const StyledMasthead = styled((props) => <Section {...props} />)`
  background: lightcoral;
  height: 900px;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  div:first-child {
    ${(props) => props.theme.mq.md`
      position: absolute;
      top: 220px;
      left: 10%;
    `}
    ${(props) => props.theme.mq.lg`
      left: 30%;
    `}
  h3 {
    font-size: 2rem;
    font-family: "Oxygen", arial;
    color: ${(props) => props.theme.colors.highlight};
    text-shadow: 0 5px 5px black;
    line-height: 2rem;
    margin-top: 7rem;
  }
  h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  h4 {
    font-size: 2.5rem;
    line-height: 2rem;
  }
  h6 {
    margin: 40px 0 0 0;
    font-size: 1.5rem;
  }
`

export const MastheadIndex = (props) => (
  <StyledMasthead gridArea="masthead" {...props}>
    <Box>
      <h3>FREE ESTIMATES</h3>
      <h2 style={{ textShadow: "0 10px 10px black" }}>DP Pool Service</h2>
      <h4 style={{ textTransform: "none", textShadow: "0 10px 10px black" }}>
        Enjoying your pool?
      </h4>
      <h6>Dallas/FtWorth</h6>
    </Box>
    <StyledBox>
      <img src="assets/images/stock-photo-car-mechanic-520750996.png" />
    </StyledBox>
  </StyledMasthead>
)
