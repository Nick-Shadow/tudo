import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap"
import Image from "react-bootstrap/Image"

const TopNavigation = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image
            src="/icons/box_checked.svg"
            alt="Logo of Vercel"
            style={{ width: 40, marginRight: 10 }}
          />
          <NavbarBrand href="/">Tudo</NavbarBrand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/demo">Demo</Nav.Link>
            <NavDropdown title="About" menuVariant="dark">
              <NavDropdown.Item href="about/***">Filler</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about/***">Filler</NavDropdown.Item>
              <NavDropdown.Item href="about/***">Filler</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavigation
