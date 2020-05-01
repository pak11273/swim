import { Grid, NavBar } from "components"

const Index = (props) => (
  <>
    <Grid>
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
          height: "300px",
        }}
      >
        main
      </div>
      <div
        style={{
          background: "yellow",
          gridArea: "random",
          width: "100vw",
          height: "300px",
        }}
      >
        random
      </div>
      <NavBar gridArea="navbar" />
    </Grid>
  </>
)

export default Index
