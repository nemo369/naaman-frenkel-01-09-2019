import axios from "axios";
import {apiKey} from '../helpers'

//   autocompalte serach: http://dataservice.accuweather.com/locations/v1/cities/autocomplete
// Current Conditions: http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
// 5 Days of Daily Forecasts: http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}

function getCurrentWeatherFAKE(cityid){
  return {data:[{"LocalObservationDateTime": "2019-09-02T08:10:00+03:00","EpochTime": 1567401000,"WeatherText": "Sunny","WeatherIcon": 1,"HasPrecipitation": false,"PrecipitationType": null,"IsDayTime": true,"Temperature": {"Metric": {"Value": 27.1,"Unit": "C","UnitType": 17},"Imperial": {"Value": 81,"Unit": "F","UnitType": 18}},"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us","Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}]}
}
function fiveDaysForcastFAKE(cityid){
  return   {data:{ "Headline": { "EffectiveDate": "2019-09-01T20:00:00+03:00", "EffectiveEpochDate": 1567357200, "Severity": 7, "Text": "Warm Sunday night", "Category": "heat", "EndDate": "2019-09-02T08:00:00+03:00", "EndEpochDate": 1567400400, "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us" }, "DailyForecasts": [ { "Date": "2019-09-01T07:00:00+03:00", "EpochDate": 1567310400, "Temperature": { "Minimum": { "Value": 76, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 91, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": [ "AccuWeather" ], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us" }, { "Date": "2019-09-02T07:00:00+03:00", "EpochDate": 1567396800, "Temperature": { "Minimum": { "Value": 76, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 89, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": [ "AccuWeather" ], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us" }, { "Date": "2019-09-03T07:00:00+03:00", "EpochDate": 1567483200, "Temperature": { "Minimum": { "Value": 76, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 87, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 38, "IconPhrase": "Mostly cloudy", "HasPrecipitation": false }, "Sources": [ "AccuWeather" ], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us" }, { "Date": "2019-09-04T07:00:00+03:00", "EpochDate": 1567569600, "Temperature": { "Minimum": { "Value": 76, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 87, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": [ "AccuWeather" ], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us" }, { "Date": "2019-09-05T07:00:00+03:00", "EpochDate": 1567656000, "Temperature": { "Minimum": { "Value": 74, "Unit": "F", "UnitType": 18 }, "Maximum": { "Value": 88, "Unit": "F", "UnitType": 18 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": [ "AccuWeather" ], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us" } ] }};
}
function getAutoSearchFAKE(value){
  return {data:[ { "Version": 1, "Key": "349727", "Type": "City", "Rank": 15, "LocalizedName": "New York", "Country": { "ID": "US", "LocalizedName": "United States" }, "AdministrativeArea": { "ID": "NY", "LocalizedName": "New York" } }, { "Version": 1, "Key": "710949", "Type": "City", "Rank": 85, "LocalizedName": "New York", "Country": { "ID": "GB", "LocalizedName": "United Kingdom" }, "AdministrativeArea": { "ID": "LIN", "LocalizedName": "Lincolnshire" } }, { "Version": 1, "Key": "2531279", "Type": "City", "Rank": 85, "LocalizedName": "New York", "Country": { "ID": "GB", "LocalizedName": "United Kingdom" }, "AdministrativeArea": { "ID": "NTY", "LocalizedName": "North Tyneside" } }, { "Version": 1, "Key": "338870", "Type": "City", "Rank": 85, "LocalizedName": "New York Mills", "Country": { "ID": "US", "LocalizedName": "United States" }, "AdministrativeArea": { "ID": "MN", "LocalizedName": "Minnesota" } }, { "Version": 1, "Key": "2128074", "Type": "City", "Rank": 85, "LocalizedName": "New York Mills", "Country": { "ID": "US", "LocalizedName": "United States" }, "AdministrativeArea": { "ID": "NY", "LocalizedName": "New York" } }, { "Version": 1, "Key": "2126946", "Type": "City", "Rank": 285, "LocalizedName": "New York Township", "Country": { "ID": "US", "LocalizedName": "United States" }, "AdministrativeArea": { "ID": "MO", "LocalizedName": "Missouri" } }, { "Version": 1, "Key": "2642589", "Type": "City", "Rank": 285, "LocalizedName": "New York Precinct", "Country": { "ID": "US", "LocalizedName": "United States" }, "AdministrativeArea": { "ID": "NE", "LocalizedName": "Nebraska" } } ]}
}
async function getCityFiveDaysForcast(cityid) {
  const req = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityid}?apikey=${apiKey}&language=en-us&details=false&metric=true`;
  return axios.get(req);
}
async function getCurrentWeather(cityid) {
  const req = `https://dataservice.accuweather.com/currentconditions/v1/${cityid}?apikey=${apiKey}&language=en-us&details=false&metric=true`;  
  return axios.get(req);
}
async function getAutoSearch(value) {
  const req =
     `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}&language=en-us`;
  return axios.get(req);
}



export default {
    getCityFiveDaysForcast,
    getCurrentWeather,
    getAutoSearch,
    fiveDaysForcastFAKE,
    getCurrentWeatherFAKE,
    getAutoSearchFAKE,
};