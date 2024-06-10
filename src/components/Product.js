import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  const { product, add } = props;
  return (
    <Card border="warning" style={{ width: "18rem", borderWidth: "3px" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.prise}</Card.Text>
        <Card.Text>{product.text}</Card.Text>
        <Button onClick={() => add(product)} variant="outline-success">
          Придбати
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}
