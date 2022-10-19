export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
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
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
