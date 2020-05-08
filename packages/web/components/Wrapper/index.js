import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 20px;
  align-items: ${(props) => props.alignItems || "center"};
  ${(props) => props.theme.mq.sm`
    align-items: center;
    padding: ${(props) => props.padding};
  `}
  background: ${(props) => props.background || "transparent"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  display: flex;
  justify-content: space-between;
  opacity: ${(props) => props.opacity || "1"};
  width: 100%;
  max-width: ${(props) => props.maxWidth};
`
