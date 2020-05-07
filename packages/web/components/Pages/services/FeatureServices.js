import { Flex, Line, Section } from "components"

import { lighten } from "polished"
import styled from "styled-components"

// const StyledSection = styled((props) => <Section {...props} />)`
const StyledSection = styled.div`
  background: ${(props) => props.background || "lightcoral"};
  position: relative;
  padding: 0;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  color: black;
  ${({ theme }) => theme.mq.md`
    `}
  > div:first-child {
    background: white;
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
`

export const FeatureServices = (props) => {
  return (
    <StyledSection {...props}>
      <Flex>
        <Flex>
          <h5>{props.title}</h5>
        </Flex>
        <Line />
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
    </StyledSection>
  )
}
