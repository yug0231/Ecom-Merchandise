import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">SHOPPERSTOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Mobile Covers" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Soft Cover</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hard Cover</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Glass Cover</NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Customize Cover
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Coffee Mugs</Nav.Link>
            <Nav.Link href="#action2">Mouse Pad</Nav.Link>
            <Nav.Link href="#action7">Key Chains</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
