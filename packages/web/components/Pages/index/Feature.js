import { Box, FeatureBtn, Flex, Line, Section, Wrapper } from "components"

import { lighten } from "polished"
import styled from "styled-components"

const StyledSection = styled((props) => <Section {...props} />)`
  background: ${(props) => props.background || "lightgray"};
  position: relative;
  padding: 0;
  width: 100%;
  justify-content: center;
  color: black;
  ${({ theme }) => theme.mq.md`
      padding: 100px;
    `}
  > div {
    z-index: 2;
    padding: 20px;
    border-radius: 5px;
    color: black;
    background: transparent;
    max-width: 1240px;
    flex-direction: column-reverse;
    ${({ theme }) => theme.mq.md`
      flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
      box-shadow: 0 0 5px gray;
    `}
  }
  > div:first-child {
    background: white;
    ${({ theme }) => theme.mq.md`
      padding: 90px;
    `}
    > div {
      justify-content: flex-start;
      hr {
        text-align: left;
        margin: 1rem 0;
      }
      > div:first-child {
        padding: 0;
      }
      > div:nth-child(3) {
        padding: 0;
      }
      h5 {
        font-size: 2.2rem;
        line-height: 2rem;
        color: ${(props) => props.theme.colors.primary || "black"};
      }
      h2 {
        color: ${(props) =>
          lighten(0.1, props.theme.colors.primary) || "black"};
        font-size: 1.2rem;
        line-height: 1.5rem;
        text-transform: none;
      }
      h6 {
        color: ${(props) =>
          lighten(0.1, props.theme.colors.primary) || "black"};
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
      ul {
        margin-top: 40px;
        margin-left: 20px;
      }
      li {
        margin: 20px 0;
      }
    }
  }
  > div:nth-child(1) {
    img {
      width: 100%;
      border-radius: 5px;
      ${(props) => props.theme.mq.xl`
        min-width: 600px;
      `}
    }
  }
  :after {
    content: "";
    background: white;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`

export const Feature = (props) => {
  return (
    <StyledSection {...props}>
      <Wrapper background="black" alignItems="flex-start" padding="70px">
        <Flex position="relative" margin={props.button && "0 0 70px 0"}>
          <Flex justifyContent="flex-start">
            <h5>{props.title}</h5>
          </Flex>
          <Line />
          <Flex margin="0 0 20px 0" justifyContent="flex-start">
            <h2>{props.subtitle}</h2>
            <ul>
              {props.features &&
                props.features.map((feature, i) => (
                  <li key={i}>
                    <h6>{feature}</h6>
                  </li>
                ))}
            </ul>
          </Flex>
          {props.button ? (
            <FeatureBtn link="/services">Services</FeatureBtn>
          ) : null}
        </Flex>
        <Flex>
          <Box>
            <img src={props.img} />
          </Box>
        </Flex>
      </Wrapper>
    </StyledSection>
  )
}
