const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");

app.use((req, res, next) => {
  console.log(`[Log]: ${req.method} request recieved on ${req.url}`);
  next();
});

app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log("Server running on port 3000");
});
