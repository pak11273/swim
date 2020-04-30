import { Box } from "rebass"

export const Container = (props) => (
  <Box
    sx={{
      color: "primary",
      maxWidth: props.maxWidth || "100%",
      mx: "auto",
    }}
  >
    {props.children}
  </Box>
)
