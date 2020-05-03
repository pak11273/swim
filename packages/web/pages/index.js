import { Box, Grid, Layout, ScrollTop, Section } from "components"

import styled from "styled-components"
import { useEffect } from "react"

const StyledMasthead = styled(Section)`
  align-items: center;
  justify-content: center;
`

const Index = (props) => {
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
        <Grid areas={["masthead", "navbar", "main", "footer"]}>
          <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
          <StyledMasthead>
            <Box>
              <h3>FREE ESTIMATES</h3>
              <h2>DP Pools</h2>
              <h4>Residential Pool and Spa Services</h4>
              <h6>Dallas/FtWorth</h6>
            </Box>
          </StyledMasthead>
          <div
            style={{
              background: "blue",
              gridArea: "footer",
              width: "100vw",
              height: "300px",
            }}
          >
            footer
          </div>
          <div
            id="main"
            style={{
              background: "red",
              gridArea: "main",
              width: "100vw",
              height: "900px",
            }}
          >
            main
          </div>
        </Grid>
      </div>
    </Layout>
  )
}

export default Index
