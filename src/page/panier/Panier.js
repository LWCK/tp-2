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
  Table,
  Image,
} from "react-bootstrap";
import "../../App.css";
import useStore from "../../store";

function Panier() {
  const panier = useStore((state) => state.panier);
  const removeAllPanier = useStore((state) => state.removeAllPanier);
  return (
    <Container>
      <h2 className="py-2">Mon Panier</h2>
      <Row>
        <Col>
          <Table className="panierList">
            <tbody>
              <tr>
                {/* <td>
                  <Button variant="danger">-</Button>
                  <Image className="imagePanier" src="../image/item1.png" />
                  <Button variant="primary">+</Button>
                </td> */}
                <td>
                  <Image className="imagePanier" src="../image/item1.png" />
                </td>
                <td>
                  Chaise <br />
                  Descp
                </td>
                <td>
                  <Button variant="danger">-</Button> 4{" "}
                  <Button variant="primary">+</Button>
                </td>
                <td>100f</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table>
            <tbody>
              <tr>
                <td>
                  <h5>Votre Panier contient {panier} produit(s)</h5>
                </td>
                <td>
                  <Button variant="danger" onClick={() => removeAllPanier()}>
                    Supprimer le panier
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
