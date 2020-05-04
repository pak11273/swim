import { Footer, NavBar } from "components"

import Head from "next/head"

export const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title || ""}</title>
    </Head>
    <NavBar id="navbar" gridArea="navbar" {...props} />

    {props.children}

    <Footer {...props} />
  </div>
)
