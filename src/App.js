import { useState, useEffect } from "react";
import {
  Button,
  Nav,
  Navbar,
  Container,
  Card,
  CardGroup,
  Row,
  Badge,
  Col,
} from "react-bootstrap";
import create from "zustand";
import "./App.css";

const title = "TP-2 E-Commerce";

function App() {
  const [products, setProducts] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://624654bee3450d61b0fd30d8.mockapi.io/productList")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("error", error));
  }, []);

  const countProducts = products.length;

  const [qteUpdated, setQteUpdate] = useState(0);
  const [qtePanierUpdated, setQtePanierUpdate] = useState(0);

  const handleClick = (param) => {
    setQteUpdate(qteUpdated - 1);
    setQtePanierUpdate(qtePanierUpdated + 1);
    const index = products.findIndex((product) => product.id === param.id);
    const newProduct = {
      id: param.id,
      name: param.name,
      desc: param.desc,
      price: param.price,
      image: param.image,
      qte: --param.qte,
    };

    const newList = [...products];
    newList[index] = newProduct;
    setProducts(newList);

    console.log(products);
    console.log(qteUpdated);
    // console.log(products);
  };

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
        <Card.Title>
          <strong>{item.name}</strong>
        </Card.Title>
        <Card.Text>
          <i>{item.desc}</i>
        </Card.Text>
        <Button variant="primary" onClick={() => handleClick(item)}>
          Ajouter au panier
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Prix : <strong>{item.price} XPF</strong>
          <br />
          Quantité : <strong>{item.qte}</strong>
        </small>
      </Card.Footer>
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
                Panier <Badge>{qtePanierUpdated}</Badge>
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
            Total des produits <br /> <strong>{countProducts}</strong>
          </Col>
        </Row>
      </Container>
      <Container>
        <CardGroup className="card">{productsList}</CardGroup>
      </Container>
      {/* <Image src='../public/item1.png' alt="je suis ici" /> */}
      {/* <Image src={image1} alt="je suis ici" /> */}
      {/* <Image src="./image/item1.png" alt="je suis ici" /> */}
    </div>
  );
}

export default App;
