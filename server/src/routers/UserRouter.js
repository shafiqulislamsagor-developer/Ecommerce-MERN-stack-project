const express = require("express");
const { getUsers, singleUser } = require("../controllers/userController");
const userRouter = express.Router();

// Users
userRouter.get("/", getUsers);
userRouter.get("/:id", singleUser);

module.exports = { userRouter };
