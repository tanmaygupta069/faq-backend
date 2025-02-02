const express = require("express");
const {
  getServerHealthInfoController,
  testApiController,
} = require("../controllers/index");
const getFaqController = require("../controllers/getFaq.controller");
// const v1 = require("./v1");
const admin = require("./admin");
const flushCacheController = require("../controllers/flushCache.controller");

const router = express.Router();

router.get("/health", getServerHealthInfoController);

router.get("/test", testApiController);

router.get("/api/faqs",getFaqController)

router.use("/api/admin",admin);

router.delete("/api/cache/flush",flushCacheController)

module.exports = router;
