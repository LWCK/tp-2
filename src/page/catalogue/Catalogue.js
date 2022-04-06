import { useState, useEffect } from "react";
import { Button, Container, Card, CardGroup, Row, Col } from "react-bootstrap";
import "../../App.css";
import useStore from "../../store";

function Catalogue() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chaise",
      desc: "Bois Massif",
      price: 500,
      image: "item1.png",
      qte: 10,
    },
    {
      id: 2,
      name: "Table",
      desc: "Ha'avare bois",
      price: 2000,
      image: "item2.png",
      qte: 6,
    },
    {
      id: 3,
      name: "Chocolat",
      desc: "Provenance des Tupuna",
      price: 10000,
      image: "item3.png",
      qte: 11,
    },
    {
      id: 4,
      name: "Chaussure",
      desc: "Vente à l'unité",
      price: 99900,
      image: "item4.png",
      qte: 28,
    },
  ]);

  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  // };

  // useEffect(() => {
  //   fetch(
  //     "https://624654bee3450d61b0fd30d8.mockapi.io/productList",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => setProducts(result))
  //     .catch((error) => console.log("error", error));
  // }, []);

  const countProducts = products.length;
  const [productPanier, setProductPanier] = useState([]);

  const panier = useStore((state) => state.panier);
  const increasePanier = useStore((state) => state.increasePanier);

  const [qteUpdated, setQteUpdate] = useState(0);

  const handleClick = (param) => {
    setQteUpdate(qteUpdated - 1);
    increasePanier();
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
    // console.log(newList);
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
        <Button
          value={item.id}
          variant="primary"
          onClick={() => handleClick(item)}
        >
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
    <div className="Catalogue">
      <Container>
        <Row>
          <Col sm={8}>
            <h2 className="py-2">Catalogue</h2>
          </Col>
          <Col sm={4} className="t_right">
            Total des produits : <strong>{countProducts}</strong>
          </Col>
        </Row>
      </Container>
      <Container>
        <CardGroup className="card">{productsList}</CardGroup>
      </Container>
    </div>
  );
}
export default Catalogue;
