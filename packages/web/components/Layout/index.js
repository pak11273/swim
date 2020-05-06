import { Footer, NavBar } from "components"
import { initGA, logPageView } from "components"

import Head from "next/head"
import { useEffect } from "react"

export const Layout = (props) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <div>
      <Head>
        <title>{props.title || ""}</title>
      </Head>
      <NavBar id="navbar" gridArea="navbar" {...props} />

      {props.children}

      <Footer {...props} />
    </div>
  )
}
