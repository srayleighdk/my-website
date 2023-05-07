// Import the necessary dependencies
const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/user");
require("dotenv").config();

// Routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

// Create a new instance of the Express application
const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use CORS middleware to enable Cross-Origin Resource Sharing
// Allow requests from the specified origin(s)
const allowedOrigins = ["http://localhost:3000", "http://localhost:5000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Define route handlers for authentication and user routes
app.use(authRouter);
app.use(userRouter);

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello from the backend! Test");
});

sequelize
  .sync()
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

// Start the server on the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
