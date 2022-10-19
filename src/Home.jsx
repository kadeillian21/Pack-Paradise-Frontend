import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";

export function Home() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(handleIndexProducts, []);
  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
      <Modal show={true}>
        <p>Test</p>
      </Modal>
    </div>
  );
}
