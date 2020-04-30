export const transitions = {
  cubic: (time) => {
    return `all ${time} cubic-bezier(0.25, 0.46, 0.45, 0.94)`
  },
  cubic2: (time) => {
    return `all ${time} cubic-bezier(.215,.61,.355,1)`
  },
  cubic3: (time) => {
    return `all ${time} cubic-bezier(.86,0,.07,1)`
  },
  ease: (time) => {
    return `all ${time} ease-in-out`
  },
}
