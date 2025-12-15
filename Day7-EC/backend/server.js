const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// paths to JSON files
const productsPath = path.join(__dirname, "data", "products.json");
const cartPath = path.join(__dirname, "data", "cart.json");

// helper functions
function readProducts() {
  console.log('Reading products from:', productsPath);
  console.log('File exists:', fs.existsSync(productsPath));
  const raw = fs.readFileSync(productsPath, "utf-8");
  console.log('Raw file content length:', raw.length);
  return JSON.parse(raw || "[]");
}

function writeProducts(data) {
  fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));
}

function readCart() {
  try {
    const raw = fs.readFileSync(cartPath, "utf-8");
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
}

function writeCart(data) {
  fs.writeFileSync(cartPath, JSON.stringify(data, null, 2));
}

// routes
app.get("/", (req, res) => {
  res.send("API is running");
});

// GET latest products from file
app.get("/products", (req, res) => {
  try {
    console.log('Products endpoint hit');
    console.log('Products path:', productsPath);
    const products = readProducts();
    console.log('Products loaded:', products.length, 'items');
    res.json(products);
  } catch (err) {
    console.error('Error in /products:', err);
    res.status(500).json({ message: "Error reading products", error: err.message });
  }
});

// POST new product from Admin → update products.json
app.post("/products", (req, res) => {
  try {
    const products = readProducts();
    const newProduct = req.body; // { name, price, image }

    const maxId = products.reduce((max, p) => Math.max(max, p.id || 0), 0);
    newProduct.id = maxId + 1;

    products.push(newProduct);
    writeProducts(products);

    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving product" });
  }
});

// GET cart items from file
app.get("/cart", (req, res) => {
  try {
    const cart = readCart();
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error reading cart" });
  }
});

// POST update cart → update cart.json
app.post("/cart", (req, res) => {
  try {
    const cartItems = req.body; // array of cart items
    writeCart(cartItems);
    res.json({ message: "Cart updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating cart" });
  }
});

// (optional) keep orders if needed later
let orders = [];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/orders", (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  orders.push(order);
  res.status(201).json(order);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

