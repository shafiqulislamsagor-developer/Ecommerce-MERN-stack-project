const express = require("express");
const { getUsers } = require("../controllers/userController");
const userRouter = express.Router();

// Users
userRouter.get("/", getUsers);

module.exports = { userRouter };
