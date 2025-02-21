const express = require("express");
const router = express.Router();
const {
  createPoint,
  getAllPoints,
} = require("../controllers/point.controller");

router.post("/", createPoint);
router.get("/", getAllPoints);

module.exports = router;
