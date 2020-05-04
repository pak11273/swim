import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle"
import { GooglePlusCircle } from "@styled-icons/boxicons-logos/GooglePlusCircle"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Twitter } from "@styled-icons/boxicons-logos/Twitter"
import { Wrapper } from "components"
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
  justify-content: center;
  padding: 3rem;
  width: 100%;
  ${({ mq }) => mq.md`
     justify-content: space-evenly;
  `}
`
const SocialFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ul {
    text-align: center;
    li {
      padding: 1rem;
      display: inline-block;
    }
  }
  padding: 3rem;
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
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
`
const titles = ["Address", "Phone", "Mail"]

export const Footer = (props) => {
  return (
    <StyledFooter {...props}>
      <Wrapper maxWidth="960px" flexDirection="column" {...props}>
        <MainFooter {...props}>
          <Column>
            <div>
              <Title>Address</Title>
              <ul>
                <li>123 Swimming pool lane</li>
                <li>Fort Worth, TX 777777</li>
              </ul>
            </div>
          </Column>
          <Column>
            <div>
              <Title>Phone</Title>
              <ul>
                <li>0123 456 7890</li>
                <li>Mon-Fri 8:00am -</li>
                <li>8:00pm</li>
              </ul>
            </div>
          </Column>
          <Column>
            <div>
              <Title>Mail</Title>
              <ul>
                <li>support@dppools.com</li>
                <li>24x7 online support</li>
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
