import Head from "next/head"
import { NavBar } from "components"

export const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title || ""}</title>
    </Head>
    <NavBar id="navbar" gridArea="navbar" {...props} />

    {props.children}

    <footer>"Footer"</footer>
  </div>
)
