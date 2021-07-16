// Personal API Key for OpenWeatherMap API
const baseURL = 'https://community-open-weather-map.p.rapidapi.com/find?q=';
const apiKey = '579e88204cmsh26eb0438bc48772p1cef4cjsn46fb89bef9b6';
const apiHost = 'community-open-weather-map.p.rapidapi.com';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generate);

/* Function called by event listener */
function generate(event) {
    event.preventDefault();
    console.log(getData('http://localhost:5000/all'));
}

/* Function to GET Web API Data*/
async function getDataFromAPI (zipCode) {
   const response = await fetch(`${baseURL}${zipCode}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": apiKey,
		"x-rapidapi-host": apiHost
	}
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

/* Function to POST data */
async function postData (url='', data={}) {
    const response = await fetch(url, {
       method:"POST",
       headers:{
           "content-Type":"application/json"
       },
       body: JSON.stringify(data)
    });

    try {
        const newData = await(response.json());
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

/* Function to GET Project Data */
async function getData (url='') {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}