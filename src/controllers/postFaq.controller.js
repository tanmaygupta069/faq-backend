const { getRedisClient } = require("../database/redis");
const saveTranslatedFaq = require("../services/translateFaq.service.cjs");

const postFaqController = async (req, res) => {
    const redisClient = await getRedisClient();
  const { question, answer } = req.body;
  console.log(question, answer);
  if (!question || !answer) {
    return res.status(400).json({
      error: "this field can't be empty",
    });
  }
  let result;
  try {
    result = await saveTranslatedFaq(question, answer);
    await redisClient.sendCommand(['FLUSHDB']);
  } catch (error) {
    console.log("error in postFaq controller ", error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
  return res.status(201).json({
    result,
  });
};

module.exports = postFaqController;
