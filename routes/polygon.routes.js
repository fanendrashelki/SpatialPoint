const express = require("express");
const router = express.Router();
const {
  createPolygon,
  getAllPolygons,
} = require("../controllers/polygon.controller");

router.post("/", createPolygon);
router.get("/", getAllPolygons);

module.exports = router;
