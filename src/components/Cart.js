import React from "react";
import Alert from "react-bootstrap/Alert";

import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, add, remove, buy } = props;
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.number * product.price,
    0
  );
  return (
    <Alert variant="success">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>корзина порожня 😨😨😨😭😭😭</p>}
      <table className="table">
        <tr>
          <td width="25%">назва</td>
          <td width="25%">кількисть</td>
          <td width="25%">ціна</td>
          <td width="25%">всього</td>
        </tr>
        {cartItems.map((product) => (
          <tr>
            <td width="25%">{product.name}</td>
            <td width="25%">
              <Button onClick={() => add(product)} variant="outline-success">
                +
              </Button>{" "}
              <Button onClick={() => remove(product)} variant="outline-danger">
                -
              </Button>{" "}
              {product.number}
            </td>
            <td width="25%">{product.price}грн</td>
            <td width="25%">{product.number * product.price}грн</td>
          </tr>
        ))}
      </table>
      <hr />
      <p className="mb-0">всього до сплати {totalPrice} грн </p>
      <Button
        onClick={buy}
        disabled={cartItems.length === 0}
        ariant="outline-success"
      >
        купити
      </Button>
    </Alert>
  );
}
