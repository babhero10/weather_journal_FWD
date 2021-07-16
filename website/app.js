// Personal API Key for OpenWeatherMap API
const baseURL = 'https://community-open-weather-map.p.rapidapi.com/find?q=';
const apiKey = '579e88204cmsh26eb0438bc48772p1cef4cjsn46fb89bef9b6';
const apiHost = 'community-open-weather-map.p.rapidapi.com';

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/
const getDataFromAPI = async (zipCode) => {
    fetch(`${baseURL}${zipCode}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": apiKey,
		"x-rapidapi-host": apiHost
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}

/* Function to POST data */


/* Function to GET Project Data */
