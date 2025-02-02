// const axios = require('axios');
const { v4: uuidv4 } = require("uuid");
const { Faqs } = require("../database/postgres/models/faq")
const axois = require("axios");


const saveTranslatedFaq = async (question, answer) => {
  try {
    const question_hi = await translateText(question, "en", "hi");
    const question_bn = await translateText(question, "en", "bn");
    const answer_hi = await translateText(answer, "en", "hi");
    const answer_bn = await translateText(answer, "en", "bn");

    const faq = await Faqs.create({
      id: uuidv4(), // UUID
      question: question,
      answer: answer,
      question_hi: question_hi,
      answer_hi: answer_hi,
      question_bn: question_bn,
      answer_bn: answer_bn,
    });

    console.log("FAQ Created:", faq);
    return faq;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const translateText = async (text, source, target) => {
  const url = `https://lingva.ml/api/v1/${source}/${target}/${text}`;
  try {
    const response = await axois.get(url);
    console.log(`Translated Text from ${source} to ${target}:`, response.data.translation);
    return response.data.translation;
  } catch (error) {
    console.error("Translation failed:", error);
    throw error;
  }
};

module.exports = saveTranslatedFaq