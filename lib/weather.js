'use strict';
/*
* Time Weather App Service
*
*/

const config = require('./config');
const axios = require('axios');

const weather = {};

weather.get = async (location, postalCode) => {
    try {
      return  await  axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units='metric'&mode=json&q=${location}`, 
                                {headers:{"X-RapidAPI-Key":config.apiKey}});
    } catch (error) {
      console.error(error)
    }
}

module.exports = weather;