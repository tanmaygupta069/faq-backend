const express = require("express");
const postFaqController = require("../../controllers/postFaq.controller");
const deleteFaqController = require("../../controllers/delete.controller");
const admin = express.Router();

admin.post("/faq",postFaqController)

admin.patch("faq")

admin.delete("/faq",deleteFaqController)

module.exports = admin;