import { Text, Wrapper } from "components"

import { Address } from "@styled-icons/entypo/Address"
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle"
import { GooglePlusCircle } from "@styled-icons/boxicons-logos/GooglePlusCircle"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Mail } from "@styled-icons/entypo/Mail"
import { OldPhone } from "@styled-icons/entypo/OldPhone"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import styled from "styled-components"

export const StyledFooter = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: ${(props) => props.gridArea || "footer"};
  max-width: ${(props) => props.maxWidth || "none"};
  width: 100%;
`

const MainFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 6rem 0 0 0;
  width: 100%;
  ${({ mq }) => mq.sm`
     justify-content: space-evenly;
  `}
`
const SocialFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 3rem;
  ul {
    text-align: center;
    li {
      padding: 1rem;
      display: inline-block;
    }
  }
  width: 100%;
`
const LegalFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    padding: 1rem;
    display: inline-block;
  }
  padding: 3rem;
  width: 100%;
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary || "black"};
  font-size: 2rem;
  line-height: 1rem;
`

const Column = styled.div`
  align-items: flex-start;
  background: transparent;
  flex: 1 1 300lix;
  display: flex;
  li {
    list-style: none;
  }
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem;
`

const StyledAddress = styled(Address)`
  color: ${(props) => props.colors.primary};
  padding: 12px 8px 0 0;
`

const StyledOldPhone = styled(OldPhone)`
  color: ${(props) => props.colors.primary};
  padding: 12px 8px 0 0;
`
const StyledMail = styled(Mail)`
  color: ${(props) => props.colors.primary};
  padding: 12px 8px 0 0;
`

// const StyledText = styled(Text)`
const StyledText = styled((props) => <Text {...props} />)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`

export const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <Wrapper maxWidth="960px" flexDirection="column" {...props}>
        <MainFooter {...props}>
          <Column>
            <StyledAddress size={32} {...props} />
            <div>
              <Title>Address</Title>
              <ul>
                <li>
                  <StyledText>123 Swimming pool lane</StyledText>
                </li>
                <li>
                  <StyledText>Fort Worth, TX 777777</StyledText>
                </li>
              </ul>
            </div>
          </Column>
          <Column>
            <StyledOldPhone size={32} {...props} />
            <div>
              <Title>Phone</Title>
              <ul>
                <li>
                  <StyledText>0123 456 7890</StyledText>
                </li>
                <li>
                  <StyledText>Mon-Fri 8:00am -</StyledText>
                </li>
                <li>
                  <StyledText>8:00pm</StyledText>
                </li>
              </ul>
            </div>
          </Column>
          <Column>
            <StyledMail size={32} {...props} />
            <div>
              <Title>Mail</Title>
              <ul>
                <li>
                  <StyledText>support@dppools.com</StyledText>
                </li>
                <li>
                  <StyledText>24x7 online support</StyledText>
                </li>
              </ul>
            </div>
          </Column>
        </MainFooter>
        <SocialFooter>
          <Column>
            <ul>
              <li>
                <a>
                  <FacebookCircle size={48} color={props.colors.primary} />
                </a>
              </li>
              <li>
                <a>
                  <Twitter size={48} color={props.colors.primary} />
                </a>
              </li>
              <li>
                <a>
                  <GooglePlusCircle size={48} color={props.colors.primary} />
                </a>
              </li>
              <li>
                <a>
                  <LinkedinSquare size={48} color={props.colors.primary} />
                </a>
              </li>
            </ul>
          </Column>
        </SocialFooter>
        <LegalFooter>
          <Column>
            <ul>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>&copy; 2020 Copyright DP Pools</li>
            </ul>
          </Column>
        </LegalFooter>
      </Wrapper>
    </StyledFooter>
  )
}
