import styled from "styled-components"

export const Section = styled.div`
  grid-area: ${(props) => props.gridArea};
  background: white url("assets/images/patric-wong-iIn9RMIlay8-unsplash.jpg")
    center/cover;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 900px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  h3 {
    font-family: "Source Sans Pro", sans-serif;
  }
  h1 {
    text-transform: uppercase;
  }
`
