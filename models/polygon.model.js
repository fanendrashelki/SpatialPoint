const mongoose = require("mongoose");

const PolygonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  area: {
    type: { type: String, enum: ["Polygon"], required: true },
    coordinates: { type: [[[Number]]], required: true },
  },
});

PolygonSchema.index({ area: "2dsphere" });

module.exports = mongoose.model("Polygon", PolygonSchema);
