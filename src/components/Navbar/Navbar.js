import { Navbar, Container, Nav } from 'react-bootstrap';


export default function TopBar(){

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">LingoLessons</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
  }