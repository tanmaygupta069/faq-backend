const cors = require("cors");
// const {
//   getAllowedOrigins,
//   getAllowedMethods,
// } = require("../constants/cors.constants");

const corsOptions = {
  origin: "*",
};

module.exports = cors(corsOptions);
