const config = require("./src/config");
const app = require("./src/server");
const {sequelize} = require("./src/database/postgres");

process.on("uncaughtException", (err) => {
  console.log("uncaught exception : ", err);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandled rejection : ", err);
});

app.listen(config.server.PORT, (err) => {
  if (err) {
    console.log(`problem running serve on port ${config.server.PORT}`);
  } else {
    console.log(`server running on port ${config.server.PORT}`);
  }
});
