export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div id="products-show">
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <p>Price: ${props.product.price}</p>
      <p>Description: {props.product.description}</p>

      <button onClick={handleClick}>Destroy Product</button>

      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" name="name" defaultValue={props.product.name} />
        </div>
        <div>
          Price: <input type="number" name="price" defaultValue={props.product.price} />
        </div>
        <div>
          Description: <input type="text" name="description" defaultValue={props.product.description} />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
