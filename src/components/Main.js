import React from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";
export default function Main(props) {
  const { products, add } = props;
  return (
    <Row className="gap-5 justify-content-center">
      {products.map((product) => (
        // <p key={product.id}>{product.name}</p>
        <Product key={product.id} product={product} add={add} />
      ))}
    </Row>
  );
}
