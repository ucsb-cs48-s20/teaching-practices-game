import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function AppNavbar(props) {
  const user = props.user;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref={true}>
          <Navbar.Brand>Next.js Demo App</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Link href="/page1" passHref={true}>
              <Nav.Link>Page 1</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
