# Spatial Data API

This API allows you to store and retrieve spatial data, including points and polygons, using MongoDB.

## Installation

### Install Dependencies

npm install


### Configure Environment Variables
Create a `.env` file and set the following values:

MONGO_URI=mongodb://localhost:27017/DBName
PORT=8000


## Start the Server

npm start


## API Endpoints

### Create a Point
**Endpoint:**

POST /points


**Request Body:**

{
    "name": "Point B",
    "latitude": 37.7749,
    "longitude": -122.4194
}



### Get All Points

GET /points


**Example Request:**

 GET http://localhost:8000/points/


### Create a Polygon
**Endpoint:**

POST /polygons


**Request Body:**

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




### Get All Polygons

GET /polygons

**Example Request:**

GET http://localhost:8000/polygons/


## License
This project is licensed under the MIT License.

