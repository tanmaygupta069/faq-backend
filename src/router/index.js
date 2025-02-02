const express = require("express");
const {
  getServerHealthInfoController,
  testApiController,
} = require("../../../faq-backend/src/controllers");
const getFaqController = require("../controllers/getFaq.controller");
// const v1 = require("./v1");
const admin = require("./admin")

const router = express.Router();

router.get("/health", getServerHealthInfoController);

router.get("/test", testApiController);

router.get("/api/faqs",getFaqController)

router.use("/api/admin",admin);

module.exports = router;
