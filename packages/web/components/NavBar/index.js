import { Container, NavButton } from "components"
import { Flex, Text } from "rebass"

const navitems = [
  { label: "about", path: "/about" },
  { label: "company", path: "/company" },
]

export const NavBar = (props) => (
  <Container>
    {console.log("props: ", props)}

    <Flex
      px={2}
      height={70}
      color="white"
      sx={{ background: "primary" }}
      alignItems="center"
    >
      <Text p={2} fontWeight="bold">
        DPPools
      </Text>
      <Flex px={2} mx="auto" />
      {navitems.map((button, i) => (
        <NavButton
          key={i}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))}
    </Flex>
  </Container>
)
