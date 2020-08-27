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
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: ${props => props.gridArea || "footer"};
  max-width: ${props => props.maxWidth || "none"};
  width: 100%;
`

const MainFooter = styled.section`
  display: flex;
  p {
    color: ${props => props.color || "white"};
  }
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

const StyledFacebookCircle = styled(FacebookCircle)`
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`
const StyledTwitter = styled(Twitter)`
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`
const StyledGooglePlusCircle = styled(GooglePlusCircle)`
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`
const StyledLinkedinSquare = styled(LinkedinSquare)`
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const LegalFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    color: ${props => props.color || "white"};
    padding: 1rem;
    display: inline-block;
  }
  padding: 3rem;
  width: 100%;
`

const Title = styled.h1`
  color: ${props => props.color || "white"};
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
  color: ${props => props.color || "white"};
  padding: 12px 8px 0 0;
`

const StyledOldPhone = styled(OldPhone)`
  color: ${props => props.color || "white"};
  padding: 12px 8px 0 0;
`
const StyledMail = styled(Mail)`
  color: ${props => props.color || "white"};
  padding: 12px 8px 0 0;
`

// const StyledText = styled(Text)`
const StyledText = styled(props => <Text {...props} />)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.primary};
`

export const Footer = props => {
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
                  <StyledText>11206 Oliver Lane</StyledText>
                </li>
                <li>
                  <StyledText>Frisco, TX 75035</StyledText>
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
                  <StyledText>903 487 8090</StyledText>
                </li>
                <li>
                  <StyledText>Mon-Fri 8:00am -</StyledText>
                </li>
                <li>
                  <StyledText>6:00pm</StyledText>
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
                  <StyledText>support@dppoolservice.net</StyledText>
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
                <a
                  href="https://www.facebook.com/DP-Pool-Service-104474771264707/?modal=admin_todo_tour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledFacebookCircle size={48} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/dppoolserv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledTwitter size={48} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledGooglePlusCircle size={48} color="white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dp-pool-5543881a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledLinkedinSquare size={48} color="white" />
                </a>
              </li>
            </ul>
          </Column>
        </SocialFooter>
        <LegalFooter>
          <Column>
            <ul>
              {/* <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li> */}
              <li>&copy; 2020 Copyright DP Pool Service</li>
            </ul>
          </Column>
        </LegalFooter>
      </Wrapper>
    </StyledFooter>
  )
}
