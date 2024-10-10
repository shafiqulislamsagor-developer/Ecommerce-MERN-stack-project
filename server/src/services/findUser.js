const createHttpError = require("http-errors");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const findUser = async (id) => {
  try {
    const options = { password: 0 };
    const user = await User.findById(id, options);
    if (!user) throw createHttpError(404, "User not found");
    return user;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      throw createHttpError(400, "invalid user");
    }
    throw error;
  }
};

module.exports = { findUser };
