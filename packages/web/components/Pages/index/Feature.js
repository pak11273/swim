import { Box, Flex, Line, Section, Wrapper } from "components"

import styled from "styled-components"

const StyledSection = styled((props) => <Section {...props} />)`
  background: ${(props) => props.background || "black"};
  padding: 0;
  width: 100%;
  justify-content: center;
  color: black;
  ${({ theme }) => theme.mq.md`
      padding: 100px;
    `}
  > div {
    padding: 20px;
    box-shadow: 0 10px 10px gray;
    border-radius: 5px;
    color: black;
    background: transparent;
    max-width: 1240px;
    flex-direction: column-reverse;
    ${({ theme }) => theme.mq.md`
      flex-direction: row;
    `}
  }
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
        color: rgba(0, 0, 0, 0.5);
        font-size: 1.2rem;
        line-height: 1.5rem;
        text-transform: none;
      }
      h6 {
        color: rgba(0, 0, 0, 0.5);
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

export const Feature = (props) => (
  <StyledSection {...props}>
    <Wrapper>
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
      <Flex>
        <Box>
          <img src={props.img} />
        </Box>
      </Flex>
    </Wrapper>
  </StyledSection>
)
