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
      price: 1000,
      image: "item1.png",
      qte: 1,
    },
    {
      id: 2,
      name: "Table",
      desc: "Ha'avare bois",
      price: 2000,
      image: "item2.png",
      qte: 1,
    },
    {
      id: 3,
      name: "Chocolat",
      desc: "Provenance des Tupuna",
      price: 5000,
      image: "item3.png",
      qte: 1,
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
        <Image className="imagePanier" src={"../image/" + i.image}></Image>
      </td>
      <td>
        <p className="t_left">
          <strong>{i.name}</strong> <br />
          {i.desc}
        </p>
      </td>
      <td>
        <Button variant="danger" onClick={() => decreasePanierQte(i.id)}>
          <strong>-</strong>
        </Button>
      </td>
      <td>{i.qte}</td>
      <td>
        <Button variant="primary" onClick={() => increasePanierQte(i.qte)}>
          <strong>+</strong>
        </Button>
      </td>
      <td>{i.price} F</td>
      <td>
        <Button variant="danger" onClick={() => removeOneProductPanier(i.id)}>
          X
        </Button>
      </td>
    </tr>
  ));
  // affichage nombre de produits dans le panier
  const productsPanierQteCommande = productsPanier.reduce(
    (a, b) => (a = a + b.qte),
    0
  );

  // calcule qte * price par produit total panier
  const productsPanierQtePrice = productsPanier.reduce(
    (a, b) => (a = a + b.qte * b.price),
    0
  );

  // calcule du 1% TVA soc
  const pourcentageTva = (productsPanierQtePrice * 1) / 100;

  // calcule total TVA sociale
  const totalTvaSociale = pourcentageTva + productsPanierQtePrice;

  // influencer le qte de productPanier
  const [productsPanierQte, setproductsPanierQte] = useState();

  // BOUTON + qte du produit panier // lien avec l'ID
  const increasePanierQte = (i) => {
    const item = productsPanier.i;

    console.log("plus");
  };

  // BOUTON - qte du produit panier // lien avec l'ID
  const decreasePanierQte = () => {
    console.log("moins");
  };

  // BOUTON retire un produit du panier quelque soit la quantité
  const removeOneProductPanier = (id) => {
    const resultat = productsPanier.filter(
      (productsPanier) => productsPanier.id !== id
    );
    setProductsPanier(resultat);
    // console.log(resultat);
  };

  // bouton validant la commande
  const validationPanier = () => {
    console.log("la commande est validée");
  };

  // influence la table panier set All 0
  const removeAllPanierQte = () => {
    console.log("supprime le panier");
  };

  return (
    <Container>
      <h2 className="py-2">Mon Panier</h2>
      <Row>
        <Col>
          <Table className="panierList" responsive>
            <tbody>{productsPanierList}</tbody>
          </Table>
        </Col>
        <Col>
          <Table responsive>
            <tbody className="panierTotal">
              <tr>
                <td>
                  <p className="pb-5">
                    Votre Panier contient{" "}
                    <strong>{productsPanierQteCommande}</strong> produit(s)
                  </p>
                </td>
                <td>
                  <p className="t_right pt-3">
                    <u>Total</u> : <strong>{productsPanierQtePrice} F</strong>
                    <br />
                    {/* <Button
                      variant="danger mt-2"
                      onClick={() => removeAllPanierQte()}
                    >
                      Supprimer le panier
                    </Button> */}
                  </p>
                </td>
              </tr>
              <tr>
                <td>TVA 1%</td>
                <td className="t_right">{pourcentageTva} F</td>
              </tr>
              <tr>
                <td>Total TTC</td>
                <td className="t_right">
                  <strong>{totalTvaSociale} XPF</strong>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="t_right py-3">
                  <Button variant="warning" onClick={() => validationPanier()}>
                    Commander
                  </Button>
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
