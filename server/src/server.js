const app = require("./app");
const { server_port } = require("./secret");

app.listen(server_port, () => {
  console.log(`Example app listening on port ${server_port}`);
});
