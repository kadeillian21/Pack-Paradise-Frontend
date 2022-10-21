import axios from "axios";

export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/products/" + props.product.id + ".json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };
  return (
    <div id="products-show">
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <p>Price: ${props.product.price}</p>
      <p>Description: {props.product.description}</p>

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
