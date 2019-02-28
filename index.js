'use strict';
/*
* Primary file for Time/Weather App
*
*/

const inputs = process.argv.slice(2);
const weather = require('./lib/weather');

if (inputs.length !== 2) {
    console.log('Please pass in a location (Arizona) and code eg us');
    return;
}

const location = inputs[0];
const postalCode = inputs[1];

const getWeatherReport = async () => {
    const report = await weather.get(location, postalCode);

    if (report.data) {
        const weatherDescription = report.data.weather[0].description;
        let date = new Date(String(report.data.dt));

        if (date.toDateString() === 'Invalid Date') {
            date = new Date();
        }
        const currentDateTime = date.toDateString();
        console.log(`The weather is ${weatherDescription} in ${location} for period ${currentDateTime}`);
    } else {
        console.log('Failed processing request, please try again');
    }
}
  
getWeatherReport();