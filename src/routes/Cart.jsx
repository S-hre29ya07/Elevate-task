import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


function Cart({ cart, setCart }) {
  
  const handleAddQty = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
          : item
      )
    );
    console.log(cart)
  };

  const handleSubstractQty = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.quantity > 1) {
 setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item))
 } else if (ProductExist.quantity === 1){
      setCart((products) =>
                    products.filter((del) => del.id !== ProductExist.id)
                  );
 }
 console.log(cart);}

  return (
    <>
      <Header cart={cart} />

      <div className="Product w-full">
        <ul className=" flex-wrap justify-evenly p-5 m-5">
          {cart.map((item) => (
            // Quan d
            <li
              className="p-3 flex text-slate-900 justify-around"
              key={item.id}
            >
              <div className="w-1/5">
                <img src={item.image}></img>
              </div>

              <h1 className="w-2/5 ml-2 text-slate-900">{item.title} </h1>

              <div className="w-1/5 flex">
                <h3 className="w-1/5">{item.price}$</h3>

                <div className="flex mx-1">
                  <button
                    className="bg-orange-300 h-5 w-5 rounded-xl p-0 m-1 text-center text-white font-bold "
                    onClick={() => handleSubstractQty(item)}
                  >
                    -
                  </button>
                  <h3>Qty: {item.quantity}</h3>
                  <button
                    className="bg-orange-300 h-5 w-5 rounded-xl p-0 m-1 text-center text-white font-bold align-middle"
                    onClick={() => handleAddQty(item)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="Add flex bg-red-400 h-9 w-30 rounded-xl p-1 text-center text-white font-bold align-middle"
                onClick={() => {
                  setCart((products) =>
                    products.filter((del) => del.id !== item.id)
                  );
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <p className="mr-5">
            The total is{" "}
            {cart
              .map((a) => a.price * a.quantity)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}{" "}
            $
          </p>

          <button className="bg-orange-300 h-9 w-30 rounded-xl p-1 text-white font-bold mx-5">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
