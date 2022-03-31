import { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  Container,
  Card,
  CardGroup,
} from "react-bootstrap";
import "./App.css";
import image1 from "./logo.svg";

const title = "TP-2 E-Commerce";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chaise",
      desc: "Bois Massif",
      price: 500,
      image: "item1.png",
    },
    {
      id: 2,
      name: "Table",
      desc: "Ha'avare bois",
      price: 200,
      image: "item2.png",
    },
    {
      id: 3,
      name: "Chocolat",
      desc: "Provenance des Tupuna",
      price: 1000,
      image: "item3.png",
    },
    {
      id: 4,
      name: "Chaussure",
      desc: "Vente à l'unité",
      price: 990,
      image: "item4.png",
    },
  ]);

  console.log(products[0].name);

  const productsList = products.map((item) => (
    <Card key={item.id}>
      <Card.Img variant="top" src={item.image} alt={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{item.price}</small>
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#link">Catalogue</Nav.Link>
              <Nav.Link href="#link">
                Panier
                {/* nombre dans le panier  */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
      <Container>
        {" "}
        <h2 className="py-2">Catalogue en ligne</h2>
      </Container>
      <Container>
        <CardGroup>{productsList}</CardGroup>
      </Container>
      <img src={products[0].image} alt="je suis ici" />
      <img src={image1} alt="je suis ici" />
      {/* <img src="./static/media/item1.png" alt="je suis ici" /> */}
      <p>{products[0].name} </p>[0].image
    </div>
  );
}

export default App;
