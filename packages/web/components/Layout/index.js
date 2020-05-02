import { NavBar } from "components"

export const Layout = ({ children, title = "This is the default title" }) => (
  <div>
    <header>
      <nav>
        <NavBar id="navbar" gridArea="navbar" />
      </nav>
    </header>

    {children}

    <footer>{"I`m here to stay"}</footer>
  </div>
)
