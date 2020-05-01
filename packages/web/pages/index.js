import { Grid, NavBar } from "components"

const Index = (props) => (
  <>
    <Grid areas={["masthead", "navbar", "main", "footer"]}>
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
      <NavBar gridArea="navbar" />
    </Grid>
  </>
)

export default Index
