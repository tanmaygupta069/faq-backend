const { Sequelize, DataTypes } = require("sequelize");
const { postgres } = require("../../config");

const sequelize = new Sequelize(
  postgres.database,
  postgres.user,
  postgres.password,
  {
    host: postgres.host,
    dialect: "postgres",
    logging: false, // Optional: To disable logging
  }
);



// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Postgres Database connected successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to postgres database:", err);
  });

sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Unable to create tables:", err);
  });

module.exports = { sequelize };
