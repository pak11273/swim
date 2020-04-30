import { Box } from "rebass"

export const Container = (props) => (
  <Box
    sx={{
      color: "blue",
      maxWidth: props.maxWidth || "100%",
      mx: "auto",
    }}
  >
    {props.children}
  </Box>
)
