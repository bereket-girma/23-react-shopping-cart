import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, selectProduct } from "./productSlice";
import { cartSlice, addToCart, selectCart } from "../Cart/cartSlice";
// css
console.log(addToCart, "a");

export function Product() {
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="main">
      {/* filter */}
      <p className="">17 Product(s) found</p>
      <div className="sidebar">
        <div className="filters">
          <h4>Sizes</h4>
          <div className="filter-size">{products.availableSizes}</div>
        </div>
      </div>

      {/* proudtcs */}
      <div className="container">
        <ul>
          {products.map((item) => (
            <li className="shelf-item">
              <div className="shipping">
                {item.isFreeShipping ? "Free Shipping" : ""}
              </div>
              <div className="image">
                <img className="productImage" src={item.img.normal}></img>
              </div>
              <div className="title">{item.title}</div>
              <span className="underscore">___</span>
              <div className="price">
                <span className="currency">{item.currencyFormat}</span>
                <span className="Rprice">{item.price.toFixed(2)}</span>
              </div>
              <div className="installments">
                {/* {(item.price / item.installments).toFixed(2)} */}
                <span>or {item.installments} </span>
                <span className="installments-price">
                  x{item.currencyFormat}
                  {(item.price / item.installments).toFixed(2)}
                </span>
              </div>

              <div className="add-to-cart">
                <button
                  className="buyBtn"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
