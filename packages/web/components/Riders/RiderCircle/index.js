import styled from "styled-components"

export const RiderCircle = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  font-size: 3rem;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || "0 auto"};
  width: ${(props) => props.width || "5%"};
  background: ${(props) => props.theme.colors.primary || props.background};
  border-radius: 50%;
  box-shadow: 0 5px 5px gray;
`
