const Point = require("../models/point.model");

const createPoint = async (req, res) => {
  try {
    const { name, latitude, longitude } = req.body;

    if (!name || !latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Name, latitude, and longitude are required" });
    }

    const point = await Point.create({
      name,
      location: { type: "Point", coordinates: [longitude, latitude] },
    });

    res.status(200).json({ message: "Point created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPoints = async (req, res) => {
  try {
    const points = await Point.find();
    res.status(200).json(points);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPoint, getAllPoints };
