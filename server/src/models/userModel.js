const { Schema, model } = require("mongoose");
const bycrypt = require("bcrypt");
const { defultImagePath } = require("../secret");



const userSchema = new Schema(
  {
    name: {
      type: String,
      requird: [true, "user name is required"],
      trim: true,
      maxlength: [31, "user name can be maxmium length"],
      minlength: [3, "user name can be minimum length"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ),
        message: "Please enter a valid email address",
      },
      requird: [true, "user email is required"],
      trim: true,
    },
    password: {
      type: String,
      requird: [true, "user password is required"],
      minlength: [3, "user password can be minimum length"],
      set: (v) => bycrypt.hashSync(v, bycrypt.genSaltSync(10)),
    },
    image: {
      type: String,
      default: defultImagePath,
    },
    address: {
      type: String,
      requird: [true, "user address is required"],
    },
    phone: {
      type: String,
      requird: [true, "user phone number is required"],
    },
    phone: {
      type: String,
      requird: [true, "user phone number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

module.exports = User;
