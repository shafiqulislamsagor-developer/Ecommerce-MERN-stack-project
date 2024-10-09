require("dotenv").config();

const server_port = process.env.SERVER_PORT || 3002;
const mongodbURL =
  process.env.MONGODB_ATLAS_URL ||
  "mongodb://localhost:27017/ecommerceProjectDB";

const defultImagePath =
  process.env.DEFAULT_IMAGE || "public/images/user/userImg.jpg";

module.exports = { server_port, mongodbURL, defultImagePath };
