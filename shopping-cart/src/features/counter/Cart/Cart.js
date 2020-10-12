import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  selectCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
  subTotal,
  displayCart,
} from "./cartSlice";

console.log(removeFromCart, "a");
export function Cart() {
  const carts = useSelector(selectCart);
  const displayItem = useSelector(displayCart);
  const prices = useSelector(subTotal);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div>
      <div className="shopping-cart">
        <span className="fas fa-shopping-cart"></span>
        <span className="productLength"> {carts.length}</span>
        <div className="selectedItems" onClick={() => dispatch(toggleCart())}>
          <div id="cart">
            <span>
              <i
                id="secondCart"
                class="fa fa-shopping-bag"
                aria-hidden="true"
              ></i>
            </span>
            <span className="productLength"> {carts.length}</span>

            {carts.map((item) => (
              <div id="cartItem" key={item.sku}>
                <div className="itemsss">
                  <img id="img" src={item.img.thumb}></img>
                  <p className="cartItemTitle">{item.title}</p>
                  <div>
                    <p className="flex size">{item.availableSizes[0]} | </p>
                    <p className="flex style"> {item.style}</p>
                  </div>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <div>
                  <p
                    className="X"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    X
                  </p>
                  <p className="cartItemPrice">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="productBtn">
                    <button
                      className="minus"
                      disabled={item.quantity <= 1 ? true : false}
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      -
                    </button>
                    <button
                      className="add"
                      onClick={() => dispatch(increaseQuantity(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cartFooter">
              <div className="subtotalPrice">
                <p className="subtotal">SUBTOTAL</p>
                <p className="finalPrice">
                  ${Number(prices.reduce((a, b) => a + b.price, 0)).toFixed(2)}
                </p>
              </div>
              <button className="checkOutBtn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
