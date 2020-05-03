import { NavBar } from "components"

export const Layout = (props) => (
  <div>
    <header>
      {console.log("props nabar: ", props)}
      <nav>
        <NavBar id="navbar" gridArea="navbar" {...props} />
      </nav>
    </header>

    {props.children}

    <footer>{"I`m here to stay"}</footer>
  </div>
)
