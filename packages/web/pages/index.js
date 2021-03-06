import {
  Feature,
  FeatureBtn,
  Grid,
  Infosection,
  Layout,
  Line,
  MastheadIndex,
  ScrollTop,
} from "components"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { Button } from "@swim/shared"
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

const Index = props => {
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
    <Layout title="DP Pool Service" {...props}>
      <div id="container">
        <Grid
          areas={[
            "masthead",
            "mission",
            "cleaning",
            "work1",
            "maintenance",
            "work2",
            "repair",
            "coa",
            "accolades",
          ]}
        >
          <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
          <MastheadIndex
            gridArea="masthead"
            background='white url("assets/images/home_header.jpg") center/cover'
          />
          <Infosection gridArea="mission" padding="200px 20px 60px 20px">
            <h6>We are a pool service & pool equipment repair company</h6>
            <Line />
            <p>
              We focus serving the North Texas area which includes <b>Frisco</b>
              , <b>Plano</b>, <b>The Colony</b>, <b>Allen</b>, <b>McKinney</b>,
              <b>Prosper</b>, and surrounding areas. Our mission is to operate
              in an ethical manner, to educate and provide a professional level
              of service which includes direct level of communication.
            </p>
          </Infosection>
          <Feature
            button
            link="Services"
            url="/services"
            id="services"
            background='url("assets/images/blue-wave-2.png") no-repeat right top/cover'
            gridArea="cleaning"
            title="Pristine Pools"
            subtitle="Our cleaning services come with impeccable quality. We ensure your pool has a fresh clean look every visit."
            features={["Pool Vacuuming", "Pool Skimming", "Tile Brushing"]}
            img="assets/images/pristine_pool.jpg"
            /* animate={show.itemOne} */
            /* ref={ourRef} */
          />
          <Infosection gridArea="work1" padding_md="200px 20px">
            <h6>Maintain your equpiment</h6>
            <Line />
            <p>
              Our team keeps your pool <b>chemically balanced</b>.
            </p>
            <p>
              With proper maintenance it keeps your pool equipment running
              properly
            </p>
          </Infosection>
          <Feature
            reverse
            background='url("assets/images/blue-wave.png") no-repeat left bottom/cover'
            gridArea="maintenance"
            title="Our Standards"
            subtitle="Our maintenance comes with the highest industry standards"
            features={[
              "Chemical balancing",
              "Thorough equipment check",
              "Professional recommendations",
            ]}
            img="assets/images/chemical_balance.jpg"
            /* animate={show.itemOne} */
            /* ref={ourRef} */
          />
          <Infosection
            gridArea="work2"
            padding_md="200px 20px"
            bottombtn="-140px"
          >
            <h6>Licensed Technicians</h6>
            <Line />
            <p>
              Our technicians will diagnose, repair, replace, and upgrade
              equipment. Sloppy repairs can lead to more costs in the long run.
              Get it right the first time with us.
            </p>
          </Infosection>
          <Feature
            background='url("assets/images/blue-wave-2.png") no-repeat left bottom/cover'
            gridArea="repair"
            title="Expert Pool Repair"
            subtitle="Our licensed technicians can diagnose, upgrade, and repair your pool equipment.  This includes:"
            features={[
              "Chlorinators",
              "Displays",
              "Filters",
              "Heaters",
              "Motors",
              "Timers",
              "Valves",
            ]}
            img="assets/images/equipment_repair.jpg"
            /* animate={show.itemOne} */
            // ref={ourRef}
          />
          <Infosection gridArea="coa" padding_md="200px 20px">
            <h6>Get scheduled Today</h6>
            <Line />
            <p>
              We offer 2 packages packed with all of your pool maintenance
              needs. Come check out what we have to offer and get a <b>FREE</b>{" "}
              quote!
            </p>
            <FeatureBtn position="relative" left="0" link="/services">
              Get a quote
            </FeatureBtn>
          </Infosection>
          {/* <Accolades
            gridArea="accolades"
            // animate={show.itemTwo}
            // ref={anotherRef}
            {...props}
          /> */}
        </Grid>
      </div>
    </Layout>
  )
}

export default Index
