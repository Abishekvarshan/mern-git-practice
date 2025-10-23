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
 
// Varshan's route
app.get("/varshan", (req, res) => {
  res.send("Hello from Varshan!");
})
// Friend's route
app.get("/friend", (req, res) => {
  res.send("Hello from Friend!");

});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
