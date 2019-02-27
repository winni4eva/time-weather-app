/*
* Time Weather Service
*
*/

const unirest = require('unirest');
const config = require('./config');

const weather = {};

weather.get = function(location, postalCode, callback){
    if(typeof(location) === 'string' && location.trim().length > 0 && typeof(postalCode) === 'string' && postalCode.trim().length > 0) {
        unirest.get(`https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units='metric'&mode=json&q=${location}`)
        .header("X-RapidAPI-Key", config.apiKey)
        .end(function (result) {
            callback(result.status, result.headers, result.body);
        });
    } else {
        callback(500, 'Error validating location and postal code');
    }
};

module.exports = weather;