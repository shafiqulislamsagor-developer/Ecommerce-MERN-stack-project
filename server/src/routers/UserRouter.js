const express = require("express");
const {
  getUsers,
  getCurrentUser,
  deleteCurrentUser,
} = require("../controllers/userController");
const userRouter = express.Router();

// Users
userRouter.get("/", getUsers);
userRouter.get("/:id", getCurrentUser);
userRouter.delete("/:id", deleteCurrentUser);

module.exports = { userRouter };
