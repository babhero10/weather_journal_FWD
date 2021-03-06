// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Configs
const port = 5000;

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
app.listen(port, listen);

// Callback to debug
function listen() {
    console.log(`Server running on port ${port}`);
}

// Initialize all route with a callback function
app.get('/all', getDataAll);

// Callback function to complete GET '/all'
function getDataAll(request, response) {
    response.send(projectData);
}

// Post Route
app.post('/addData', addData)

function addData (request, response) {
    let data = request.body;
    
    console.log('server side data ', data);
    
    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feeling;

    response.send(projectData);
    
}