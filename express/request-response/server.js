const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Server created successfully");

  res.status(200).json({
    message: "Hello from Express Server",
  });
});

app.get("/about", (req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  res.status(200).json({
    message: "About page",
  });
});

app.post("/users", (req, res) => {
  console.log("POST resquest received");

  res.status(201).json({
    message: "User created Successfully",
  });
});

app.listen(port, () => {
  console.log(`server running on: http://localhost:${port}`);
});
