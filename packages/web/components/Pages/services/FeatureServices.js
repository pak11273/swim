import { Flex, Line, Section } from "components"

import { lighten } from "polished"
import styled from "styled-components"

// const StyledSection = styled((props) => <Section {...props} />)`
const StyledSection = styled.div`
  align-items: baseline;
  background: ${(props) => props.background || "white"};
  border-radius: 10px;
  box-shadow: 0 5px 10px gray;
  display: flex;
  justify-content: center;
  min-height: 600px;
  margin: 20px;
  position: relative;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  color: black;
  ${({ theme }) => theme.mq.md`
    height: 600px;
    `}
  > div:first-child {
    background: white;
    text-align: center;
    > div {
      justify-content: center;
      hr {
        background: white;
        margin: 30px auto;
        text-align: center;
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
        color: ${(props) => props.colorh5 || props.theme.colors.primary};
      }
      h2 {
        color: ${(props) =>
          props.colorh2 || lighten(0.1, props.theme.colors.primary)};
        font-size: 1.2rem;
        ${(props) => props.theme.mq.sm`
          font-size: ${(props) => props.fontSizeh2_sm};
        `}
        line-height: 1.5rem;
        line-height: ${(props) => props.lineHeighth2};
        padding: ${(props) => props.paddingh2};
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
        text-align: left;
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
`

export const FeatureServices = (props) => {
  return (
    <StyledSection {...props}>
      <Flex>
        <Flex flexDirection="column" background="red">
          <h5>{props.title}</h5>
          <Line width="15%" />
        </Flex>
        <Flex>
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
      </Flex>
      {props.children}
    </StyledSection>
  )
}
