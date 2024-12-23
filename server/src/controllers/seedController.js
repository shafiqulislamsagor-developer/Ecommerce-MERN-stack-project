const data = require("../data");
const User = require("../models/userModel");
// comment
const seedUser = async (req, res, next) => {
  try {
    // deleting all existing users
    await User.deleteMany({});
    // insert new user
    const user = await User.insertMany(data.user);

    // successfully inserted
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = seedUser;
