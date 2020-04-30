import { Container, NavBar } from "components"

const Index = (props) => (
  <Container>
    <NavBar {...props} />
    <div style={{ width: "100%", height: "5000px" }}>hello</div>
  </Container>
)

export default Index
