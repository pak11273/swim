import { Container, NavButton } from "components"
import { Flex, Text } from "rebass/styled-components"

import { ThreeBars } from "@styled-icons/octicons/ThreeBars"

// import { Flex, Text } from "rebass/styled-components"

const navitems = [
  { label: "about", path: "/about" },
  { label: "company", path: "/company" },
]

export const NavBar = (props) => (
  <Container position="fixed">
    <Flex
      px={2}
      height={80}
      sx={{ background: "primary", color: "white" }}
      alignItems="center"
    >
      <Text p={2} fontWeight="bold">
        DPPools
      </Text>
      <Flex px={2} mx="auto" />
      <ThreeBars size="48" />
      {/* {navitems.map((button, i) => (
        <NavButton
          key={i}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))} */}
    </Flex>
  </Container>
)
