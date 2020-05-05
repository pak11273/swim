import {
  Box,
  Flex,
  Grid,
  Layout,
  Line,
  ScrollTop,
  Section,
  Wrapper,
} from "components"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { MeetingRoom } from "@styled-icons/material-outlined/MeetingRoom"
import { PeopleOutline } from "@styled-icons/material-outlined/PeopleOutline"
import { Spa } from "@styled-icons/boxicons-regular/Spa"
import { SwimmingPool } from "@styled-icons/fa-solid/SwimmingPool"
import styled from "styled-components"

const StyledMasthead = styled(Section)`
  background: white url("assets/images/patric-wong-iIn9RMIlay8-unsplash.jpg")
    center/cover;
  height: 900px;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  div:first-child {
    ${(props) => props.theme.mq.md`
      position: absolute;
      top: 220px;
      left: 10%;
    `}
    ${(props) => props.theme.mq.lg`
      left: 30%;
    `}
  h3 {
    font-size: 2rem;
    font-family: "Oxygen", arial;
    color: ${(props) => props.theme.colors.highlight};
    text-shadow: 0 5px 5px black;
    line-height: 2rem;
    margin-top: 7rem;
  }
  h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  h4 {
    font-size: 2.5rem;
    line-height: 2rem;
  }
  h6 {
    margin: 40px 0 0 0;
    font-size: 1.5rem;
  }
`
// transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
const Div = styled.div`
  transition: transform 1s;
  width: 100%;
  background-color: red;
`
/* i'm using destructuring on the prop above */
/* adding a conventional CSS class could look something like this:
<div ref={ourRef} className={`defaultClass${show.itemOne ? " addedClass" : ""}`} /> */

const StyledCleaning = styled(Section)`
  background: url("assets/images/blue-wave-2.png") center/cover;
  width: 100%;
  justify-content: center;
  color: black;
  > div {
    color: black;
    max-width: 1240px;
    flex-direction: column-reverse;
    ${({ theme }) => theme.mq.md`
      flex-direction: row;
    `}
  }
  > div:first-child {
    > div {
      max-width: 510px;
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
      h6 {
        color: ${(props) => props.theme.colors.primary || "black"};
        font-size: 1.2rem;
        line-height: 1.2rem;
      }
      > div:nth-child(1) {
      }
    }
  }
  > div:nth-child(1) {
    img {
      width: 100%;
      max-width: 480px;
    }
  }
`
const StyledRepair = styled(Section)`
  background: url("assets/images/blue-wave-1.png") center/cover;
  width: 100%;
  justify-content: center;
  color: black;
  > div {
    color: black;
    max-width: 1240px;
    flex-direction: column;
    ${({ theme }) => theme.mq.md`
      flex-direction: row;
    `}
  }
  > div:first-child {
    > div {
      max-width: 510px;
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
        color: ${(props) => props.theme.colors.primary || "black"};
      }
      h6 {
        color: ${(props) => props.theme.colors.primary || "black"};
        font-size: 1.2rem;
      }
      > div:nth-child(1) {
      }
    }
  }
  > div:nth-child(1) {
    img {
      width: 100%;
      max-width: 480px;
    }
  }
`

const StyledOther = styled(Section)`
  background: ${(props) => props.background || "transparent"};
  > div {
    > h5 {
      font-size: 2.2rem;
      color: ${(props) => props.theme.colors.primary || "black"};
    }
    > h6 {
      color: ${(props) => props.theme.colors.primary || "black"};
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
        color: ${(props) => props.theme.colors.primary || "black"};
        font-size: 1.4rem;
      }
      width: 200px;
      p {
        line-height: 1.5rem;
      }
    }
  }
`

const StyledAccolades = styled(Section)`
  flex-direction: row;
  justify-content: space-evenly;
  height: 300px;
  background: lightgray;
  img {
    background: transparent;
    height: 20px;
  }
  ${({ theme }) => theme.mq.sm`
      img {
        height: 80px;
      }
      > div {
        max-width: 640px;
      }
    `}
  ${({ theme }) => theme.mq.md`
      img {
        height: 80px;
      }
      > div {
        max-width: 1240px;
      }
    `}
`
const AccoladesWrapper = styled(Wrapper)`
  max-width: 200px;
`

const StyledSpa = styled(Spa)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledMeetingRoom = styled(MeetingRoom)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledPeopleOutline = styled(PeopleOutline)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledBox = styled(Box)`
  display: none;
  position: absolute;
  bottom: 33px;
  right: 20%;
  img {
    height: 700px;
    background: transparent;
  }
  ${(props) => props.theme.mq.md`
    right: 5%;
    display: block;
  `}
  ${(props) => props.theme.mq.xl`
    right: 15%;
  `}
  ${(props) => props.theme.mq.xxl`
    right: 25%;
  `}
`

const Index = (props) => {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  })

  const ourRef = useRef(null),
    anotherRef = useRef(null),
    refThree = useRef(null)

  useEffect(() => {
    // const topPos = (element) => element.getBoundingClientRect().top
    // const element = document.getElementById("container")
    // const bodyRect = document.body.getBoundingClientRect()
    // const elemRect = element.getBoundingClientRect()
    // const offset = elemRect.top - bodyRect.top
    // const div1Pos = topPos(ourRef.current),
    //   div2Pos = topPos(anotherRef.current),
    //   div3Pos = topPos(refThree.current)
    // const onScroll = () => {
    //   const scrollPos = window.scrollY + window.innerHeight
    //   if (div1Pos < scrollPos) {
    //     doShow((state) => ({ ...state, itemOne: true }))
    //   } else if (div2Pos < scrollPos) {
    //     doShow((state) => ({ ...state, itemTwo: true }))
    //   } else if (div3Pos < scrollPos) {
    //     doShow((state) => ({ ...state, itemThree: true }))
    //   }
    // }
    // window.addEventListener("scroll", onScroll)
    // return () => window.removeEventListener("scroll", onScroll)
    /* 
       remove the event listener in the cleanup function 
       to prevent memory leaks
    */
  }, [])

  useEffect(() => {
    var top = document.getElementById("scrollTop")
    var isScrolling = false

    function scrollReveal(e) {
      // if (window.scrollY > 100) {
      //   top.style.display = "block"
      // } else {
      //   top.style.display = "none"
      // }
    }
    const projects = document.querySelectorAll(".project")
    const animateLeft = document.querySelectorAll(".animate--left")
    const animateRight = document.querySelectorAll(".animate--right")

    function animationScrolling(e) {
      for (var i = 0; i < projects.length; i++) {
        var listItemLeft = animateLeft[i]
        var listItemRight = animateRight[i]

        if (isPartiallyVisible(projects[i])) {
          listItemLeft.classList.add("active")
          listItemRight.classList.add("active")
        } else {
          listItemLeft.classList.remove("active")
          listItemRight.classList.remove("active")
        }
      }
    }

    function throttleScroll(e) {
      if (isScrolling === false) {
        window.requestAnimationFrame(function () {
          scrollReveal(e)
          animationScrolling(e)
          isScrolling = false
          animationScrolling(e)
        })
      }
      isScrolling = true
    }
    document.addEventListener("scroll", throttleScroll, false)
    return document.removeEventListener("scroll", () => null)
  }, [])

  useEffect(() => {
    var navbar = document.getElementById("navbar")
    if (window.scrollY > 100) {
      navbar.setAttribute("shadow", true)
    }
  })

  const scrollToTop = () => {
    const element = document.getElementById("container")
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top
    // return window.scrollTo(0, 0)
    scrollTo(offset, null, 2000)
  }

  return (
    <Layout title="DP PoolCare" {...props}>
      <div id="container">
        <Grid
          areas={[
            "masthead",
            "cleaning",
            "repair",
            "other",
            "div3",
            "accolades",
            "footer",
          ]}
        >
          <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
          <StyledMasthead gridArea="masthead">
            <Box>
              <h3>FREE ESTIMATES</h3>
              <h2>DP PoolCare</h2>
              <h4>Pool & Spa Services</h4>
              <h6>Dallas/FtWorth</h6>
            </Box>
            <StyledBox>
              <img src="assets/images/stock-photo-car-mechanic-520750996.png" />
            </StyledBox>
          </StyledMasthead>
          <StyledCleaning
            gridArea="cleaning"
            padding="80px 0"
            // animate={show.itemOne}
            ref={ourRef}
          >
            <Wrapper {...props}>
              <Flex>
                <Flex>
                  <h5>Our Cleaning Routine</h5>
                </Flex>
                <Line />
                <Flex>
                  <h6>We keep our pools pristine and healthy</h6>
                </Flex>
                <Box>
                  <p>
                    We offer a pool service, including an array of tasks, such
                    as scheduled pool cleaning, pool vacuuming, pool
                    plastering,pool caulking, and much more.{" "}
                  </p>
                </Box>
              </Flex>
              <Flex>
                <Box>
                  <img src="assets/images/286975408.jpg" />
                </Box>
              </Flex>
            </Wrapper>
          </StyledCleaning>{" "}
          <StyledRepair gridArea="repair">
            <Wrapper>
              <Flex>
                <Box>
                  <img src="assets/images/337387834.jpg" />
                </Box>
              </Flex>
              <Flex>
                <Flex>
                  <h5>Our Repair Routine</h5>
                </Flex>
                <Line />
                <Flex>
                  <h6>
                    We maintain the highest standards when it comes to pool
                    repair
                  </h6>
                </Flex>
                <Box>
                  <p>
                    We strive to make your pool a safe place. Our number one
                    priority is to make your pool a safe zone for all visitors.
                    We will repair and/or replace any damaged areas or parts.
                  </p>
                </Box>
              </Flex>
            </Wrapper>
          </StyledRepair>
          <StyledOther
            gridArea="other"
            // animate={show.itemThree}
            ref={refThree}
            {...props}
          >
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
                  Low-pressure wash the exterior. Vacuum and sweep out your
                  sauna and remove loose dirt. We also sanitize your spa so
                  surface viruses (ie. Covid-19) are completely removed.
                </p>
              </Box>
              <Box>
                <StyledPeopleOutline size={48} />
                <h6>Jacuzzi</h6>
                <p>
                  We use chlorine/bromine to sanitize jacuzzi but also use
                  allergy free cleaners if necessary. We will rinse your filters
                  and check if they need replacing with every visit.
                </p>
              </Box>
              <Box>
                <StyledSpa size={48} />
                <h6>Spa</h6>
                <p>
                  We provide a deep cleansing of your spa and refill your
                  sanitizers. We check and replace unusable filters with every
                  visit.
                </p>
              </Box>
            </Flex>
          </StyledOther>
          <StyledAccolades
            gridArea="accolades"
            // animate={show.itemTwo}
            ref={anotherRef}
          >
            <AccoladesWrapper>
              <img src="assets/images/accolades/angielist.png" />
              <img src="assets/images/accolades/nspf.png" />
              <img src="assets/images/accolades/super.png" />
              <img src="assets/images/accolades/ipssa.png" />
              <img src="assets/images/accolades/contractor.png" />
            </AccoladesWrapper>
          </StyledAccolades>
        </Grid>
      </div>
    </Layout>
  )
}

export default Index
