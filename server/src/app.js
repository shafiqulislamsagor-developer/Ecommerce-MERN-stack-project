const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const app = express();
const xss = require("xss-clean");
const rateLimite = require("express-rate-limit");
const { userRouter } = require("./routers/UserRouter");

const reateLimiter = rateLimite.rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP, please try again in a minute.",
});

// Middleware to log requests

app.use(morgan("dev"));
app.use(xss());
app.use(reateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/users", userRouter);

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

app.get("/products", (req, res) => {
  res.status(200).send({
    massege: "acci ami nodemon app niye",
  });
});

// client error handling
app.use((req, res, next) => {
  next(createHttpError(404, "Page not found"));
});

// server error handling

app.use((error, req, res, next) => {
  return res.status(error.status || 500).send({
    success: false,
    message: error.message,
  });
});

module.exports = app;
