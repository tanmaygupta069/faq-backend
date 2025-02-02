const {Faqs}  = require("../database/postgres/models/faq");

const getFaqs = async () => {
  try {
    const faqs = await Faqs.findAll();
    return faqs;
  } catch (error) {
    console.log("error in getFaqs : ", error);
    throw error;
  }
};

module.exports = getFaqs;
