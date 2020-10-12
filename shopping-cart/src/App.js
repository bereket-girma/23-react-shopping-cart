import React from 'react';
import logo from './logo.svg';
import { Product } from './features/counter/Product/Product';
import { Cart } from './features/counter/Cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
     <Product/>
     <Cart />
    </div>
  );
}

export default App;
