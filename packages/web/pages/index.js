import { Grid, NavBar, ScrollTop } from "components"

import { useEffect } from "react"

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

  const scrollToTop = () => {
    const element = document.getElementById("container")
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = element.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top
    // return window.scrollTo(0, 0)
    scrollTo(offset, null, 2000)
  }

  return (
    <div id="container">
      <Grid areas={["masthead", "navbar", "main", "footer"]}>
        <ScrollTop id="scrollTop" scrollToTop={scrollToTop} />
        <div
          style={{
            background: "green",
            gridArea: "masthead",
            width: "100vw",
            height: "300px",
          }}
        >
          masthead
        </div>
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
          style={{
            background: "red",
            gridArea: "main",
            width: "100vw",
            height: "900px",
          }}
        >
          main
        </div>
        <NavBar gridArea="navbar" />
      </Grid>
    </div>
  )
}

export default Index
