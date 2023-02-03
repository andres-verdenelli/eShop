import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";

export default function ProductList() {
  return (
    <section className="main-container">
      <div className="ProductList">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
}
