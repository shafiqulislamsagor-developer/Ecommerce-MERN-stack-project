const app = require("./app");
const connectDB = require("./config/db");
const { server_port } = require("./secret");

app.listen(server_port, async () => {
  console.log(`Example app listening on port ${server_port}`);
  await connectDB();
});
