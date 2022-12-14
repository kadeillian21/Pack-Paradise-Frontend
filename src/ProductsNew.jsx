import axios from "axios";

export function ProductsNew(props) {
  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      const newProduct = response.data;
      console.log("Created Product", newProduct);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create Product");
    const params = new FormData(event.target);
    handleCreateProduct(params);
    event.target.reset;
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label for="price">Price:</label>
        <br />
        <input type="number" id="price" name="price" />
        <br />
        <label for="image">Image:</label>
        <br />
        <input type="text" id="image" name="image" />
        <br />
        <label for="description">Description:</label>
        <br />
        <input type="text" id="description" name="description" />
        <br />
        <label for="supplier_id">Supplier Id:</label>
        <br />
        <input type="number" id="supplier_id" name="supplier_id" />
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
