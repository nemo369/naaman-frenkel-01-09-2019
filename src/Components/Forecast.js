import React from "react";
import ForecastCurrent from "./ForecastCurrent";
import ForecastFiveDays from "./ForecastFiveDays";
import weatherApi from "../vendor/weatherApi";
import { recudeForcastRes } from "../helpers";
import FavBtn from "./FavBtn";
import {  toast } from "react-toastify";


class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fiveDaysForcast: [],
      currentWeather: {},
    };
  }

  async fetchForecast(){
    const cityid = this.props.city.cityid;
    try {
      let fiveDaysForcast = await weatherApi.getCityFiveDaysForcast(cityid);
      fiveDaysForcast = recudeForcastRes(fiveDaysForcast);
      this.setState({fiveDaysForcast});

      let currentWeather = await weatherApi.getCurrentWeather(cityid);
      currentWeather = currentWeather.data[0];
    this.setState({currentWeather});
    } catch{
      const notify = () => toast.error("Oh No! It's us not you");
      notify();
    }
  }
  async componentDidMount() {

    this.fetchForecast()
  }
  componentDidUpdate(prevProps){
    if (this.props.city.cityid !== prevProps.city.cityid) {
      this.fetchForecast()
    }
  }


  render() {
    const currentCity = this.props.city.location;
    return (
      <section className="forecast">
        <ForecastCurrent
          weatherIcon={this.state.currentWeather.WeatherIcon}
          city={currentCity.LocalizedName}
          date={this.state.currentWeather.EpochTime}
          temp={this.state.currentWeather.Temperature}
          weatherText={this.state.currentWeather.WeatherText}
        />
        <div className="forecast__week">
          <ForecastFiveDays days={this.state.fiveDaysForcast} />
    <FavBtn {...this.props} />
        </div>
      </section>
    );
  }
}
export default Forecast;