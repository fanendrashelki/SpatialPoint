const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true },
  },
});

PointSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Point", PointSchema);
