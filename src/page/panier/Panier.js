import { useState } from "react";
import { Button, Container, Row, Col, Table, Image } from "react-bootstrap";
import "../../App.css";
import useStore from "../../store";

function Panier() {
  const panier = useStore((state) => state.panier);
  const removeAllPanier = useStore((state) => state.removeAllPanier);
  // const increasePanier = useStore((state) => state.increasePanier);
  // const decreasePanier = useStore((state) => state.decreasePanier);

  const [productsPanier, setProductsPanier] = useState([
    {
      id: 1,
      name: "Chaise",
      desc: "Bois Massif",
      price: 500,
      image: "item1.png",
      qte: 1,
    },
    // {
    //   id: 2,
    //   name: "Table",
    //   desc: "Ha'avare bois",
    //   price: 2000,
    //   image: "item2.png",
    //   qte: 2,
    // },
  ]);

  // var requestOptions1 = {
  //   method: "GET",
  //   redirect: "follow",
  // };

  // fetch(
  //   "https://624654bee3450d61b0fd30d8.mockapi.io/productPanier",
  //   requestOptions1
  // )
  //   .then((response) => response.json())
  //   .then((result) => setProductPanier(result))
  //   .catch((error) => console.log("error", error));

  const productsPanierList = productsPanier.map((i) => (
    <tr key={i.id}>
      <td>
        <Image className="img-card" src={"../image/" + i.image}></Image>
      </td>
      <td>
        {i.name} <br />
        {i.desc}
      </td>
      <td>
        <Button variant="danger" onClick={() => decreasePanierQte()}>
          -
        </Button>
      </td>
      <td>{i.qte}</td>
      <td>
        <Button variant="primary" onClick={() => increasePanierQte()}>
          +
        </Button>
      </td>
      <td>{i.price}</td>
      {/* <td>
        <Button variant="danger" onClick={() => decreasePanier()}>
          -
        </Button>{" "}
        4{" "}
        <Button variant="primary" onClick={() => increasePanier()}>
          +
        </Button>
      </td> */}
    </tr>
  ));

  const productsPanierL = productsPanier.reduce((a, b) => (a = a + b.qte), 0);
  // influencer le qte de productPanier
  const [productPanierQte, setProductPanierQte] = useState();

  const increasePanierQte = () => {
    console.log("plus");
  };
  const decreasePanierQte = () => {
    console.log("moins");
  };
  const removeAllPanierQte = () => {
    console.log("rien");
  };

  return (
    <Container>
      <h2 className="py-2">Mon Panier</h2>
      <Row>
        <Col>
          <Table className="panierList">
            <tbody>
              {/* <tr>
                <td>
                  <Image className="imagePanier" src="../image/item1.png" />
                </td>
                <td>
                  Chaise <br />
                  Descp
                </td>
                <td>
                  <Button variant="danger" onClick={() => decreasePanier()}>
                    -
                  </Button>{" "}
                  4{" "}
                  <Button variant="primary" onClick={() => increasePanier()}>
                    +
                  </Button>
                </td>
                <td>100f</td>
              </tr> */}
              {productsPanierList}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table>
            <tbody>
              <tr>
                {/* <td>Votre Panier contient {panier} produit(s)</td> */}
                <td>Votre Panier contient {productsPanierL} produit(s)</td>
                <td>Total : X</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Button variant="danger" onClick={() => removeAllPanierQte()}>
                    Supprimer le panier
                  </Button>
                  {/* <Button variant="danger" onClick={() => removeAllPanier()}>
                    Supprimer le panier
                  </Button> */}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default Panier;
