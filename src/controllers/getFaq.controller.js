const { getRedisClient } = require("../database/redis");
const getFaqs = require("../services/getFaq.service");

const getFaqController = async (req, res) => {
  const lang = req.query.lang;
  const cacheKey = `faqs:${lang}`;
  const redisClient = await getRedisClient();

  try {
    const cacheData = await redisClient.get(cacheKey);
    if (cacheData) {
      console.log("cache :",cacheData);
      return res.json(JSON.parse(cacheData));
    }
    const faqs = await getFaqs();
    console.log(faqs);
    if (faqs.length == 0) {
      console.log("database empty");
      return res.status(400).json({
        message: "no faqs found",
      });
    }
    const translatedFAQs = faqs.map((faq) => ({
      id: faq.id,
      question: faq[`question_${lang}`] || faq.question,
      answer: faq[`answer_${lang}`] || faq.answer,
    }));
    const result = await redisClient.set(
      cacheKey,
      JSON.stringify(translatedFAQs),
      {
        EX: 600,
      }
    );
    if (!result) {
      return res.status(400).json({ error: "bad request" });
    }
    return res.json(translatedFAQs);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error " });
  }
};

module.exports = getFaqController;
