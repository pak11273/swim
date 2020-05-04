import { Box, Grid, Layout, ScrollTop, Section } from "components"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import styled from "styled-components"

const StyledMasthead = styled(Section)`
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
          <Div
            style={{ gridArea: "maintenance" }}
            // animate={show.itemThree}
            ref={refThree}
          >
            div1
          </Div>
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
