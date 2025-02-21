const Polygon = require("../models/polygon.model");

exports.createPolygon = async (req, res) => {
  try {
    const { name, coordinates } = req.body;

    // ✅ Validate coordinates format
    if (!Array.isArray(coordinates) || coordinates.length === 0) {
      return res
        .status(400)
        .json({ error: "Coordinates must be a non-empty array" });
    }

    const polygon = await Polygon.create({
      name,
      area: { type: "Polygon", coordinates },
    });

    res.status(201).json({ message: "Polygon created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPolygons = async (req, res) => {
  try {
    const polygons = await Polygon.find();
    res.status(200).json(polygons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
