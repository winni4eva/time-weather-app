/*
* Primary file for Time/Weather App
*
*/

const inputs = process.argv.slice(2);
const weather = require('./lib/weather');

if(inputs.length !== 2) {
    console.log('Please pass in a location (Arizona) and code eg us');
    return;
}

const location = inputs[0];
const postalCode = inputs[1];

weather.get(location, postalCode, function(status, headers, body){
    if(status === 200) {
        const weatherDescription = body.weather[0].description;
        let date = new Date(String(body.dt));

        if(date.toDateString() === 'Invalid Date') {
            date = new Date();
        }
        const currentDateTime = date.toDateString();
        console.log(`The weather is ${weatherDescription} in ${location} for period ${currentDateTime}`);
    } else {
        console.log('Failed processing your request, please try again');
    }
});