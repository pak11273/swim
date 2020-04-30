import { Box } from "rebass/styled-components"

export const Container = (props) => {
  const { maxWidth, position } = props
  return (
    <Box
      sx={{
        color: "primary",
        maxWidth: maxWidth || "100%",
        mx: "auto",
        position: position,
        width: "100%",
      }}
    >
      {props.children}
    </Box>
  )
}
