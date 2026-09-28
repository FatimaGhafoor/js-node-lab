const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.use((req, res, next) => {
  req.userName = "Fatima";
  console.log(req.userName);
  next();
});

app.get("/", (req, res) => {
  console.log("Route Handler");
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
