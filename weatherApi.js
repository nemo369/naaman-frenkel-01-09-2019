import axios from "axios";
import {apiKey} from '../helpers'
//   autocompalte serach: http://dataservice.accuweather.com/locations/v1/cities/autocomplete
// Current Conditions: http://dataservice.accuweather.com/currentconditions/v1/{locationKey}
// 5 Days of Daily Forecasts: http://dataservice.accuweather.com/forecasts/v1/daily/5day/{locationKey}


async function getCityFiveDaysForcast(cityId) {
  const req = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apkkey=${apiKey}&language=en-us&details=false&metric=false%20HTTP/1.1`;
  return axios.get(req);
}
async function getCityCurrentConditins(cityId) {
  const req = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apkkey=${apiKey}&language=en-us&details=false&metric=false%20HTTP/1.1`;
  return axios.get(req);
}
async function getAutoSearch(val) {
  const req =
     `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}=${val}&language=en-us HTTP/1.1`;
  return axios.get(req);
}



export default {
    getCityFiveDaysForcast,
    getCityCurrentConditins,
    getAutoSearch
};