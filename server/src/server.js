const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello , API is working fine !!!");
});

app.get("/products", (req, res) => {
  res.status(200).send({
    massege: "acci ami nodemon app niye",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
