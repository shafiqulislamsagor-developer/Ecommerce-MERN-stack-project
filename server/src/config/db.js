const mongoose = require("mongoose");
const { mongodbURL } = require("../secret");
const connectDB = async (option = {}) => {
  try {
    // somting
    await mongoose.connect(mongodbURL, option);
    console.log("MongoDB Connected...");
  } catch (error) {
    // error handling
    mongoose.connection.on("error", () => {
      console.error(`MongoDB connection error: ${error.toString()}`);
    });
  }
};

module.exports = connectDB;
