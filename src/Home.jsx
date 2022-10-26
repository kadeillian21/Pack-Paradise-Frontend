import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleShowProduct = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleHideProduct = () => {
    setIsProductsShowVisible(false);
  };

  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      const newProduct = response.data;
      setProducts([...products, newProduct]);
    });
  };

  const handleUpdateProduct = (id, params) => {
    axios.patch("http://localhost:3000/products/" + id + ".json", params).then((response) => {
      const updatedProduct = response.data;
      // handleHideProduct();
      setCurrentProduct(updatedProduct);
      setProducts(
        products.map((product) => {
          if (product.id === updatedProduct.id) {
            return updatedProduct;
          } else {
            return product;
          }
        })
      );
    });
  };

  const handleDestroyProduct = (product) => {
    axios.delete("http://localhost:3000/products/" + product.id + ".json").then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      handleHideProduct();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div className="container">
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
