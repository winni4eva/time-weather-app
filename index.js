/*
* Primary file for Time/Weather App
*
*/

const inputs = process.argv.slice(2);
const weather = require('./lib/weather');

if(inputs.length !== 2) {
    console.log('Please pass in a location eg Arizona and postal code eg 85001');
    return;
}

const location = inputs[0];
const postalCode = inputs[1];

weather.get(location, postalCode, function(status, headers, body){
    if(status === 200) {
        console.log(body);
        return;
    }
    
});