const app = require("./app");
const config = require("./config/config");

const PORT = config.app.port;

app.listen(4000, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
