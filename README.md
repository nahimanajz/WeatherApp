# WeatherApp
It is  application which helps to enter regions with their temperatures and User would be able to insert, retreive, update and delete weather info head over [here](https://weatherapp-j.netlify.app/index.html) to visit the site
## Tools used
* Vanilla HTML, CSS and JavaScript
* EXPRESS, MONGODB on backend
* HEROKU and netlify

# Features
API base URL: `https://blooming-inlet-03785.herokuapp.com`
|Endpoint | Description|
|--|---|
|GET /api/v1/regions/|get all regions|
|POST /api/v1/regions/store| insert new weather record|
|GET /api/v1/regions/:ID| Retreive one weather info based on `id ` param|
|Delete /api/v1/regions/:ID| delete one weather info based on `id ` param|
|PUT /api/v1/regions/:ID| Update one weather info based on `id ` param|

## Installation guide
Later on cloning this repository you can follow the following instruction to go through whole full stack application
## Prerequisite
Having nodejs installed into your computer and postman incase you want to test APIs
## Steps
In your terminal perform the following commands
`
cd server/ && npm install && npm start
cd ../client/ 
`
- Change this line ``` const index_url =https://blooming-inlet-03785.herokuapp.com/api/v1/regions/ ``` 
- To const index_url = `https://localhost:2000/api/v1/regions/`
 Open __index.html__ you would be able to see list of all registered `weather` info and navigate the UI
