const redis = require("redis");
const {
  redis: { USER, PASSWORD, HOST, PORT },
} = require("../../config");

let redisClient = null;
const getRedisClient = async () => {
  if (redisClient == null) {
    await createRedisClient();
  }
  return redisClient;
};

const createRedisClient = async () => {
  if (!USER || !PASSWORD || !HOST || !PORT) {
    throw new Error("redis configuration is missing");
  }

  const redisHostUrl = `redis://${HOST}:${PORT}`; // redis://:localhost:6379'
  console.log(`Connecting to Redis at ${redisHostUrl}`);

  redisClient = await redis.createClient({
    url: redisHostUrl,
  });
  redisClient
    .on("error", (err) => {
      console.error("redis connection failed: ", err);
      throw err;
    })
    .connect();
  console.log("redis connection established");
};


module.exports = {
  getRedisClient,
  createRedisClient,
};
