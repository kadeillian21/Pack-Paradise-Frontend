export function ProductsShow(props) {
  return (
    <div id="products-show">
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  );
}
