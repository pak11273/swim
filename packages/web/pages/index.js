import {
  Accolades,
  AdditonalServices,
  Feature,
  Grid,
  Layout,
  MastheadIndex,
  ScrollTop,
} from "components"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { lighten } from "polished"
import styled from "styled-components"

// transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
const Div = styled.div`
  transition: transform 1s;
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

  // useEffect(() => {
  // const topPos = (element) => element.getBoundingClientRect().top

  //   const div1Pos = topPos(ourRef.current),
  //     div2Pos = topPos(anotherRef.current),
  //     div3Pos = topPos(refThree.current)

  //   const onScroll = () => {
  //     const scrollPos = window.scrollY + window.innerHeight
  //     if (div1Pos < scrollPos) {
  //       doShow((state) => ({ ...state, itemOne: true }))
  //     } else if (div2Pos < scrollPos) {
  //       doShow((state) => ({ ...state, itemTwo: true }))
  //     } else if (div3Pos < scrollPos) {
  //       doShow((state) => ({ ...state, itemThree: true }))
  //     }
  //   }
  //   window.addEventListener("scroll", onScroll)
  //   return () => window.removeEventListener("scroll", onScroll)
  // }, [])

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
    <Layout title="DP PoolCare" {...props}>
      <div id="container">
        <Grid
          areas={[
            "masthead",
            "cleaning",
            "maintenance",
            "repair",
            "additional",
            "div3",
            "accolades",
            "footer",
          ]}
        >
          <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
          <MastheadIndex
            gridArea="masthead"
            background='white url("assets/images/patric-wong-iIn9RMIlay8-unsplash.jpg") center/cover'
          />
          <Feature
            id="services"
            background='url("assets/images/blue-wave-2.png") no-repeat right top/cover'
            gridArea="cleaning"
            title="Pristine Pools"
            subtitle="Our cleaning services come with impeccable quality. We ensure your pool has a fresh clean look every visit."
            features={[
              "Pool Vacuuming",
              "Pool Skimming",
              "Tile Brushing",
              "Deck Spraying",
            ]}
            img="assets/images/286975408.jpg"
            /* animate={show.itemOne} */
            /* ref={ourRef} */
          />
          <Feature
            reverse
            background='url("assets/images/blue-wave-1.png") no-repeat left bottom/cover'
            gridArea="maintenance"
            title="High Mainentance Standards"
            subtitle="Our maintenance comes with the highest industry standards"
            features={[
              "Chemical balancing",
              "Thorough equipment check",
              "Recommendations",
            ]}
            img="assets/images/high-standards.jpg"
            /* animate={show.itemOne} */
            /* ref={ourRef} */
          />
          <Feature
            background='url("assets/images/blue-wave-2.png") no-repeat left bottom/cover'
            gridArea="repair"
            title="Expert Pool Repair"
            subtitle="We strive to make your pool a safe place. Our number one priority is to make your pool a safe zone for all visitors. We will repair and/or replace any damaged areas or parts."
            features={[
              "Pool Plastering",
              "Pool Caulking",
              "Tile Refinishing",
              "Deck Sealing",
            ]}
            img="assets/images/337387834.jpg"
            /* animate={show.itemOne} */
            // ref={ourRef}
          />
          <AdditonalServices
            gridArea="additional"
            // animate={show.itemThree}
            // ref={refThree}
            {...props}
          />
          <Accolades
            gridArea="accolades"
            // animate={show.itemTwo}
            // ref={anotherRef}
            {...props}
          />
        </Grid>
      </div>
    </Layout>
  )
}

export default Index
