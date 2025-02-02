require("dotenv").config();
// const { environments } = require("../constants");

const getConfig = () => {
  return Object.freeze({
    server: {
      PORT: process.env.PORT,
    },
    postgres:{
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
    },
    redis: {
      HOST: process.env.REDIS_HOST,
      PORT: process.env.REDIS_PORT,
      USER: process.env.REDIS_USER,
      PASSWORD: process.env.REDIS_PASSWORD,
    },
  });
};

module.exports = getConfig();
