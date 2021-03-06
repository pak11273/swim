import {
  AdditonalServices,
  FeatureServices,
  Flex,
  Grid,
  Layout,
  MastheadServices,
  RiderCircle,
  ScrollTop,
  Text,
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
const StyledRiderCircle = styled(RiderCircle)`
  background: yellow;
`

const Sale = styled.div`
  background: transparent;
  color: blue;
  margin: 25px auto;
  padding-left: -24px;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  p {
    font-size: 2rem;
    line-height: 2rem;
  }
  span {
    background: transparent;
    font-size: 2rem;
  }
`

const Services = props => {
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

  const StyledNumber = styled(Text)`
    color: white;
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: center;
    span {
      color: ${({ theme }) => theme.colors.secondary};
      display: block;
      font-size: 3rem;
      font-weight: 600;
      line-height: 3rem;
    }
    ${({ theme }) => theme.mq.sm`
        display: inline-block;
    `}
  `
  return (
    <Layout title="DP Pool Service" {...props}>
      <div id="container">
        <Grid areas={["masthead", "additional"]}>
          <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
          <MastheadServices
            gridArea="masthead"
            background='white url("assets/images/services_header.jpg") center/cover'
          >
            <Flex
              margin="100px 20px"
              maxWidth="80%"
              padding="100px 20px"
              background="rgba(0,0,0,.5)"
            >
              <Flex flexDirection="column">
                <StyledNumber>
                  Call us at <span>903-487-8090</span>
                </StyledNumber>
                <Text
                  margin="0 0 30px 0"
                  color="white"
                  fontSize="1.5rem"
                  lineHeight="2rem"
                >
                  and get your FREE QUOTE!
                </Text>
              </Flex>
              <Text
                maxWidth="960px"
                color="white"
                fontSize="2rem"
                lineHeight="2.4rem"
                textAlign="center"
              >
                You didn't invest in a pool to work more. Let us maintain your
                pool so you can relax and enjoy it.
              </Text>
            </Flex>
            <FeatureServices
              colorh5="white"
              title="Standard Package"
              features={[
                "Check and maintain pool chemistry",
                "Check filters and pool equipment",
                "Remove all debris from skimmer baskets",
                "Remove all debris from pump baskets",
                "Backwash the filter",
                "Brush all walls and steps",
                "Net pool debris",
              ]}
            />
            <FeatureServices
              colorh5="white"
              fontSizeh2_sm="2.4rem"
              lineHeighth2="3rem"
              paddingh2="4.5rem 1rem"
              title="Premier Package"
              subtitle="Comes with everything in the Standard Package plus vacuuming your whole pool!"
            >
              {/* <StyledRiderCircle
                bottom="-20px"
                right="-20px"
                height="150px"
                width="150px"
              >
                <Sale>
                  <p>New</p>
                  <p>Clients</p>
                  <span>Special!</span>
                </Sale>
              </StyledRiderCircle> */}
            </FeatureServices>
          </MastheadServices>
          <AdditonalServices
            gridArea="additional"
            // animate={show.itemThree}
            // ref={refThree}
            {...props}
          />
        </Grid>
      </div>
    </Layout>
  )
}

export default Services
