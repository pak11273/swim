import styled from "styled-components"

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}
/* transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out; */

export const NavMenu = styled.nav`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  position: absolute;
  top: 98px;
  right: 0;
  text-align: left;
  width: 100%;

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
