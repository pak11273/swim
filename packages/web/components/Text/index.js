import styled from "styled-components"

export const Text = styled.p`
  background: transparent;
  color: ${(props) => props.color || props.theme.colors.primary};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  max-width: ${(props) => props.maxWidth};
`
