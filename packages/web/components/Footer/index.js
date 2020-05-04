import { Wrapper } from "components"
import styled from "styled-components"

export const StyledFooter = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  grid-area: ${(props) => props.gridArea || "footer"};
  background: ${(props) => props.bg || props.background.primary};
  max-width: ${(props) => props.maxWidth || "none"};
  width: 100%;
  ${({ mq }) => mq.sm`
   display: none;
 `}
`

const MainFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const SocialFooter = styled.section``
const LegalFooter = styled.section``

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
`
const titles = ["Address", "Phone", "Mail"]

export const Footer = (props) => {
  console.log(props)
  return (
    <StyledFooter {...props}>
      <Wrapper maxWidth="960px" flexDirection="column">
        <MainFooter>
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
            <Title>Social</Title>
          </Column>
        </SocialFooter>
        <LegalFooter>Legal</LegalFooter>
      </Wrapper>
    </StyledFooter>
  )
}
