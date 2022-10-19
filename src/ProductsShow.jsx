export function ProductsShow(props) {
  return (
    <div id="products-show">
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <p>Chef: {props.product.image}</p>
      <p>Prep Time: {props.product.price}</p>
      <p>Ingredients: {props.product.description}</p>
    </div>
  );
}
