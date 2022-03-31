import { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  Container,
  Card,
  CardGroup,
  Image,
  Span,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";

const title = "TP-2 E-Commerce";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chaise",
      desc: "Bois Massif",
      price: 500,
      image: "item1.png",
      panier: false,
    },
    {
      id: 2,
      name: "Table",
      desc: "Ha'avare bois",
      price: 200,
      image: "item2.png",
      panier: false,
    },
    {
      id: 3,
      name: "Chocolat",
      desc: "Provenance des Tupuna",
      price: 1000,
      image: "item3.png",
      panier: false,
    },
    {
      id: 4,
      name: "Chaussure",
      desc: "Vente à l'unité",
      price: 990,
      image: "item4.png",
      panier: false,
    },
  ]);

  const countProducts = products.length;

  const productsList = products.map((item) => (
    <Card key={item.id}>
      {/* importation img + CONCAT */}
      <Card.Img
        variant="top"
        className="img-card"
        src={"./image/" + item.image}
        alt={item.image}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted mr-auto">
          Prix : <strong>{item.price} XPF</strong>
        </small>
      </Card.Footer>
      {/* <p>{item.id}</p>
      <p>{item.name}</p>
      <p>{item.desc}</p>
      <p>{item.image}</p>
      <p>{item.price}</p> */}
    </Card>
  ));

  return (
    <div className="App">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="h1">
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="alignR">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#link">Catalogue</Nav.Link>
              <Nav.Link href="#link">
                Panier
                {/* nombre dans le panier  */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col sm={8}>
            <h2 className="py-2">Catalogue en ligne</h2>
          </Col>
          <Col sm={4} className="alignR">
            <p> Total des produits : {countProducts}</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <CardGroup className="card">{productsList}</CardGroup>
      </Container>
      {/* <Image src='../public/item1.png' alt="je suis ici" /> */}
      {/* <Image src={image1} alt="je suis ici" /> */}
      {/* <Image src="./image/item1.png" alt="je suis ici" /> */}
      {/* <p>{products[0].name} </p>[0].image */}
    </div>
  );
}

export default App;
