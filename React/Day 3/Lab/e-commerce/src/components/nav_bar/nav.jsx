import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function ColorSchemesExample() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Shopify</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/market">Market</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
  
  export default ColorSchemesExample;