import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";

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
    </div>
  );
}
