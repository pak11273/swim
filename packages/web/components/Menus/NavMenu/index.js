import styled from "styled-components"

export const NavMenu = styled.nav`
  align-items: center;
  background: white;
  display: flex;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
  transition: transform 0.3s ease-in-out;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  position: absolute;
  top: 99px;
  right: 0;
  text-align: left;
  width: 100%;
  z-index: -1;

  a {
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
  }

  @media (min-width: 640px) {
    display: none;
  }
`
