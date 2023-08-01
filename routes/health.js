const express = require("express");
const router = express.Router();
const healthController = require("../controllers/health_controller");

router.post("/create", healthController.createHealthTips);
router.get("/get", healthController.getHealthTips);
router.get("/get/:id", healthController.getHealthTipsById);
router.put("/update/:id", healthController.updatedHealthTip);
router.delete("/delete/:id", healthController.deleteHealthTip);

module.exports = router;