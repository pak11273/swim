import Link from "next/link"
import styled from "styled-components"

const StyledMenu = styled.div`
  align-items: center;
  background: white;
  display: flex;
  transition: transform 0.3s ease-in-out;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  position: absolute;
  top: 86px;
  right: 0;
  text-align: left;
  width: 100%;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
  z-index: -1;
  button {
    margin: 10px;
  }
  @media (min-width: 640px) {
    display: none;
  }
`

const StyledA = styled.a`
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`
export const NavResponsive = (props) => {
  //   const handleClick = (e, link) => {
  //     e.preventDefault
  //     console.log("link: ", link)
  //   }
  return (
    <StyledMenu open={props.open}>
      {props.links.map((link, i) => (
        <button
          key={i}
          href={link.href}
          onClick={() => {
            handleClick(link.href)
          }}
        >
          <StyledA href="/contact" {...props}>
            {link.label}
          </StyledA>
        </button>
      ))}
    </StyledMenu>
  )
}
