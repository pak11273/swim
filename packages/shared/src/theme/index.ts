import { colors } from "./colors"
import { mq } from "./mq"
import { transitions } from "./transitions"

const background = { ...colors }

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  colors,
  background,
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  transitions,
  mq,
}
