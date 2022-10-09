import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
