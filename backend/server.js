// Import the necessary dependencies
const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config;

// Routes
const productRoutes = require("./routes/products");
const authRouter = require("./routes/auth");

// Create anew instance of the Express application
const app = express();
// User body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());
// Define route handlers for products
app.use("/products", productRoutes);
app.use(authRouter);
// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello from the backend! Test");
});

// Start the server on the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
