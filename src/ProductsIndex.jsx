import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  props.products;
  return (
    <div id="products-index">
      <h1>All Products</h1>
      Search filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      {props.products
        .filter((product) => product.name.toLowerCase().includes(searchFilter))
        .map((product) => (
          <div className="products" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image}></img>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => props.onSelectProduct(product)}>More info</button>
          </div>
        ))}
    </div>
  );
}
