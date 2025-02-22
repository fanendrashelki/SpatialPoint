# Install Dependencies
npm install

# Configure Environment Variables
MONGO_URI=mongodb://localhost:27017/DBName
PORT=8000

# Start the Server
npm start
# API Requests & Responses
## Create a Point
http://localhost:8000/points/
POST /points
{
    "name": "Point B",
    "latitude": 37.7749,
    "longitude": -122.4194
}
## Get a Point
GET /points
http://localhost:8000/points/

## Create a Polygon
http://localhost:8000/polygons
POST /polygons
{
  "name": "Central",
  "coordinates": [
    [
      [-73.968285, 40.785091],
      [-73.958285, 40.795091],
      [-73.948285, 40.785091],
      [-73.968285, 40.775091],
      [-73.968285, 40.785091]
    ]
  ]
}
## Get a Polygon
GET /polygons
http://localhost:8000/points/
