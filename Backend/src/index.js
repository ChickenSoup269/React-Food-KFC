const express = require("express");
const products = require("../../Frontend/src/components/Products/products");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Read all
app.get("/products", (req, res) => {
  const reversedProducts = [...products].reverse();
  res.json(reversedProducts);
});

// Create
app.post("/products", (req, res) => {
  const newProduct = req.body;

  const maxId =
    products.length > 0
      ? Math.max(...products.map((product) => product.id))
      : 0;
  newProduct.id = maxId + 1;

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// Update
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;

  let productIndex = products.findIndex(
    (product) => product.id === parseInt(id)
  );

  if (productIndex !== -1) {
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: "Product not found." });
  }
});

// Delete
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  let productIndex = products.findIndex(
    (product) => product.id === parseInt(id)
  );

  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: "Product not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
