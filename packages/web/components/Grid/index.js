import { Box } from "rebass/styled-components"

export const Grid = (props) => {
  const { maxWidth, position, bg, gap } = props
  return (
    <Box
      sx={{
        display: "grid",
        background: bg,
        gridGap: 3,
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
