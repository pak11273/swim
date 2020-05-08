import { Box, FeatureBtn, Flex, Section, Wrapper } from "components"

import { lighten } from "polished"
import styled from "styled-components"

const StyledSection = styled((props) => <Section {...props} />)`
  background: ${(props) => props.background || "white"};
  position: relative;
  justify-content: center;
  > div {
    align-items: center;
    flex-direction: column;
  }
  h6 {
    color: ${(props) => props.theme.colors.primary || "black"};
    font-size: 2rem;
    text-align: center;
  }
  b {
    font-size: 1.4rem;
  }
  hr {
    margin: 20px;
  }
  p {
    text-align: center;
    max-width: 800px;
    color: ${(props) => lighten(0.1, props.theme.colors.primary) || "black"};
    font-size: 1.4rem;
    line-height: 2rem;
  }
  padding: 0;
  width: 100%;
`

export const Infosection = (props) => {
  return (
    <StyledSection {...props}>
      <Wrapper alignItems="flex-start">
        {props.children}
        {props.button ? (
          <FeatureBtn link="/services">Services</FeatureBtn>
        ) : null}
        <Box>
          <img src={props.img} />
        </Box>
      </Wrapper>
    </StyledSection>
  )
}
