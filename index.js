const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const pointRoutes = require("./routes/point.routes");
const polygonRoutes = require("./routes/polygon.routes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/points", pointRoutes);
app.use("/polygons", polygonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
