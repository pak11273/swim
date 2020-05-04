import {
  Box,
  Flex,
  Grid,
  Layout,
  Line,
  ScrollTop,
  Section,
  Text,
} from "components"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { PeopleOutline } from "@styled-icons/material-outlined/PeopleOutline"
import { Spa } from "@styled-icons/boxicons-regular/Spa"
import { SwimmingPool } from "@styled-icons/fa-solid/SwimmingPool"
import styled from "styled-components"

const StyledMasthead = styled(Section)`
  background: white url("assets/images/patric-wong-iIn9RMIlay8-unsplash.jpg")
    center/cover;
  grid-area: ${(props) => props.area};
  align-items: center;
  justify-content: center;
`
// transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
const Div = styled.div`
  transition: transform 1s;
  height: 900px;
  width: 100%;
  background-color: red;
`
/* i'm using destructuring on the prop above */
/* adding a conventional CSS class could look something like this:
<div ref={ourRef} className={`defaultClass${show.itemOne ? " addedClass" : ""}`} /> */

const StyledMaintenance = styled(Section)`
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

const StyledSpa = styled(Spa)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledSwimmingPool = styled(SwimmingPool)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
`
const StyledPeopleOutline = styled(PeopleOutline)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary || "black"};
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
    const topPos = (element) => element.getBoundingClientRect().top

    // const element = document.getElementById("container")
    // const bodyRect = document.body.getBoundingClientRect()
    // const elemRect = element.getBoundingClientRect()
    // const offset = elemRect.top - bodyRect.top

    const div1Pos = topPos(ourRef.current),
      div2Pos = topPos(anotherRef.current),
      div3Pos = topPos(refThree.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }))
      } else if (div2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }))
      } else if (div3Pos < scrollPos) {
        doShow((state) => ({ ...state, itemThree: true }))
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
    /* 
       remove the event listener in the cleanup function 
       to prevent memory leaks
    */
  }, [])

  useEffect(() => {
    var top = document.getElementById("scrollTop")
    var isScrolling = false

    function scrollReveal(e) {
      if (window.scrollY > 100) {
        top.style.display = "block"
      } else {
        top.style.display = "none"
      }
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
    <Layout title="DP Pools" {...props}>
      <div id="container">
        <Grid
          areas={[
            "masthead",
            "filler",
            "maintenance",
            "services",
            "div2",
            "div3",
            "footer",
          ]}
        >
          <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
          <StyledMasthead gridArea="masthead">
            <Box>
              <h3>FREE ESTIMATES</h3>
              <h2>DP Pools</h2>
              <h4>Residential Pool and Spa Services</h4>
              <h6>Dallas/FtWorth</h6>
            </Box>
          </StyledMasthead>
          <div
            style={{
              gridArea: "filler",
              background: "green",
              height: "1168px",
            }}
          >
            FILLER
          </div>
          <StyledMaintenance
            gridArea="maintenance"
            // animate={show.itemThree}
            ref={refThree}
            {...props}
          >
            <Flex>
              <h5>Maintenance and More</h5>
            </Flex>
            <Line />
            <Flex>
              <h6>You can trust us for all your repairs and maintenance</h6>
            </Flex>
            <Flex>
              <Box>
                <StyledSwimmingPool size={48} />
                <h6>Pool</h6>
                <p>
                  We offer a pool service, including an array of tasks, such as
                  scheduled pool cleaning, pool vacuuming, pool plastering,pool
                  caulking, and much more.{" "}
                </p>
              </Box>
              <Box>
                <StyledPeopleOutline size={48} />
                <h6>Jacuzzi</h6>
                <p>
                  To maintain your domestic hot tub or commercial jacuzzi in
                  outstanding condition, we provide hot tub repair alongwith
                  various maintenance work, including caulking, water
                  maintenance, heater repairs, and more.
                </p>
              </Box>
              <Box>
                <StyledSpa size={48} />
                <h6>Spa</h6>
                <p>
                  We serve our business clients with scheduled spa repair and
                  maintenance services, comprising a thorough spa cleaning
                  service with spa heating repair tasks, and much more.
                </p>
              </Box>
            </Flex>
          </StyledMaintenance>
          <Div
            style={{ gridArea: "div2" }}
            // animate={show.itemTwo}
            ref={anotherRef}
          >
            div2
          </Div>
          <Div
            style={{ gridArea: "div3", height: "9704px" }}
            // animate={show.itemOne}
            ref={ourRef}
          >
            div3
          </Div>
        </Grid>
      </div>
    </Layout>
  )
}

export default Index
