// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Configs
const port = 5000;

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors);

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
app.listen(port, listen)

// Callback to debug
function listen() {
    console.log("Server running...");
}

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  
