import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Catalogue from "./Catalogue";
import Panier from "./Panier";
import Header from "./components/header/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" index element={<App />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/panier" element={<Panier />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
