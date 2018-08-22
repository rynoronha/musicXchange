const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

router.get("/cities", cityController.index);
router.get("/cities/:id", cityController.show);

module.exports = router;
