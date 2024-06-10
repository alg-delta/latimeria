import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import data1 from "./data1";

import data2 from "./data2";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
    alert("ваше замовлення прийнято");
  };
  return (
    <div className="App">
      <BrowserRouter basename="/latimeria/">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <br />
                <Main products={data} add={add} />
                <br />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </div>
            }
          />
          <Route
            path="/drinks"
            element={
              <div>
                <br />
                <Main products={data1} add={add} />
                <br />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </div>
            }
          />
          <Route
            path="/dop"
            element={
              <div>
                <br />
                <Main products={data2} add={add} />
                <br />
                <Cart
                  cartItems={cartItems}
                  add={add}
                  remove={remove}
                  buy={buy}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
