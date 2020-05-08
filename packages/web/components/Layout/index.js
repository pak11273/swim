import { Footer, Gap, NavBar, initGA, logPageView } from "components"

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
      <Gap padding="43px" />
      {props.children}
      <Footer {...props} gridArea="footer" />
    </div>
  )
}
