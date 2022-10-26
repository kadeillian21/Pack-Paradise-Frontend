import { ProductsIndex } from "./ProductsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

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
