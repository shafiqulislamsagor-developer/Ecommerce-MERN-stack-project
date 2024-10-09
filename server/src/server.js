const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

// Middleware to log requests

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  } else {
    res.status(401).json({ message: "You are not logged in" });
  }
};

app.get("/", (req, res) => {
  res.send("Hello , API is working fine !!!");
});

// User
app.get("/api/user", isLoggedIn, (req, res) => {
  const id = req.body.id;
  console.log(id);
  res.status(200).send({
    user: "user",
    message: "user is logged in",
  });
});

app.get("/products", (req, res) => {
  res.status(200).send({
    massege: "acci ami nodemon app niye",
  });
});

// client error handling
app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found" });
  next();
});

// server error handling

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send({ message: "Something went wrong" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
