// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to MERN Git Practice!");
});

// Example: Placeholder for functions (each person adds their own)
app.get("/test", (req, res) => {
  res.send("Test route working!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
