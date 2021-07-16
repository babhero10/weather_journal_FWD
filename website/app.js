/* Global Variables */

// Personal API Key for OpenWeatherMap API
const baseURL = 'https://community-open-weather-map.p.rapidapi.com/find?q=';
const apiKey = '579e88204cmsh26eb0438bc48772p1cef4cjsn46fb89bef9b6';
const apiHost = 'community-open-weather-map.p.rapidapi.com';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generate);

/* Function called by event listener */
function generate(event) {
    event.preventDefault();

    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    // ensure that all data available
    if (!zipCode || !feeling) {
        alert("Please, Full all required data!");
        return;
    }

    getDataFromAPI(zipCode)
    .then((response) => {
        
        if (response.list.length == 0) {
            alert("Can't find any data!");
            return;
        }

        const temp = response.list[0].main.temp;

        // Create a new date instance dynamically with JS
        let d = new Date();
        let date = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

        const userResponse = [zipCode, feeling];
        
        const newData = {temp, date, userResponse};
        
        postData(`http://localhost:5000/addData`, newData)
        .then(() => {
            getData('http://localhost:5000/all')
            .then((response) => {
                changeUI(response);
            });
        });
    });
}

/* Function to GET Web API Data*/
async function getDataFromAPI (zipCode) {
   let response = await fetch(`${baseURL}${zipCode}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": apiKey,
		"x-rapidapi-host": apiHost
	}
    });

    try {
        let newData = await response.json();
        return newData;
    } catch(error) {
        alert("Something went wrong!");
        console.log(`Error: ${error}`);
    }
}

/* Function to POST data */
async function postData (url='', data={}) {
    let response = await fetch(url, {
       method:"POST",
       headers:{
           "content-Type":"application/json"
       },
       body: JSON.stringify(data)
    });

    try {
        let newData = await(response.json());
        return newData;
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

/* Function to GET Project Data */
async function getData (url='') {
    let response = await fetch(url);
    try {
        let newData = await response.json();
        return newData;
    } catch(error) {
        alert('Something went wrong!');
        console.log(`Error: ${error}`);
    }
}

// Change UI function
function changeUI(response) {
    console.log(response);
    const lastResponse = response[response.length - 1];
    console.log(lastResponse);
    let date = document.getElementById('date');
    let temp = document.getElementById('temp');
    let userData = document.getElementById('content');

    date.innerHTML = "Date: " + lastResponse.date;
    temp.innerHTML = "Temperature: " + lastResponse.temp+"&deg;F";
    userData.innerHTML = `Zip code: ${lastResponse.userResponse[0]}<br/>Feeling: ${lastResponse.userResponse[1]}`;
}