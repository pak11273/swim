import { Box, Flex, Line, Section } from "components"

import { MeetingRoom } from "@styled-icons/material-outlined/MeetingRoom"
import { PeopleOutline } from "@styled-icons/material-outlined/PeopleOutline"
import { Spa } from "@styled-icons/boxicons-regular/Spa"
import { lighten } from "polished"
import styled from "styled-components"

const StyledSection = styled((props) => <Section {...props} />)`
  background: ${(props) => props.background || "transparent"};
  padding: 100px 0;
  ${(props) => props.theme.mq.xl`
      padding: 100px;
    `}
  > div {
    > h5 {
      font-size: 2.2rem;
      color: ${(props) => props.theme.colors.primary || "black"};
    }
    > h6 {
      color: ${(props) => lighten(0.1, props.theme.colors.primary) || "black"};
      font-size: 1.2rem;
    }
    width: 100%;
    max-width: 1240px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    div {
      margin: 25px;
      > h6 {
        color: ${(props) =>
          lighten(0.1, props.theme.colors.primary) || "black"};
        font-size: 1.4rem;
      }
      width: 200px;
      p {
        color: ${(props) =>
          lighten(0.1, props.theme.colors.primary) || "black"};
        line-height: 1.5rem;
      }
    }
  }
`

const StyledMeetingRoom = styled(MeetingRoom)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledSpa = styled(Spa)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledPeopleOutline = styled(PeopleOutline)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
export const AdditonalServices = (props) => (
  <StyledSection {...props}>
    <Flex>
      <h5>Additional Services</h5>
    </Flex>
    <Line />
    <Flex>
      <h6>We take care of all your aqua-leisure products</h6>
    </Flex>
    <Flex>
      <Box>
        <StyledMeetingRoom size={48} />
        <h6>Sauna</h6>
        <p>
          Low-pressure wash the exterior. Vacuum and sweep out your sauna and
          remove loose dirt. We also sanitize your spa so surface viruses (ie.
          Covid-19) are completely removed.
        </p>
      </Box>
      <Box>
        <StyledPeopleOutline size={48} />
        <h6>Jacuzzi</h6>
        <p>
          We use chlorine/bromine to sanitize jacuzzi but also use allergy free
          cleaners if necessary. We will rinse your filters and check if they
          need replacing with every visit.
        </p>
      </Box>
      <Box>
        <StyledSpa size={48} />
        <h6>Spa</h6>
        <p>
          We provide a deep cleansing of your spa and refill your sanitizers. We
          check and replace unusable filters with every visit.
        </p>
      </Box>
    </Flex>
  </StyledSection>
)
