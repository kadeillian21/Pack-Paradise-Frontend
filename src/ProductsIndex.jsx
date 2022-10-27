export function ProductsIndex(props) {
  props.products;
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
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
