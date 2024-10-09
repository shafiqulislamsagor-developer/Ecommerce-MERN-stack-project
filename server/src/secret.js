require("dotenv").config();

const server_port = process.env.SERVER_PORT || 3002;

module.exports = { server_port };
