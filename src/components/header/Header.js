import { useState } from "react";
import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const title = "TP-2 E-Commerce";
function Header() {
  const [qtePanierUpdated, setQtePanierUpdate] = useState(0);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="topTitle" to="./">
            {title}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="alignR">
            <Nav.Link>
              <Link className="navLink" to="./">
                Accueil
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLink" to="/catalogue">
                Catalogue
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navLink" to="/panier">
                Panier <Badge>{qtePanierUpdated}</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
