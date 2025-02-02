const { getRedisClient } = require("../database/redis");

const flushCacheController = async (_,res) => {
  const redisClient = await getRedisClient();
  try {
    await redisClient.sendCommand(["FLUSHDB"]);
    console.log("cache flushed");
    return res.status(200).json({
      message: "cache flushed",
    });
  } catch (error) {
    console.log("error in flush cache : ", error);
    return res.status(500).json({
      messsage: "internal server error ",
    });
  }
};

module.exports = flushCacheController;
