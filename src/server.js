const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello , API is working fine !!!");
});

app.get("/products", (req, res) => {
  res.status(200).send({
    massege: "acci ami",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
