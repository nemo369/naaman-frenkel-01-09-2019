import React, { Component } from "react";
import ForecastCurrent from "../../Components/ForecastCurrent";
import { connect } from "react-redux";
import weatherApi from "../../vendor/weatherApi";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../store/actions/actionCreators";

class FavoritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      favs: []
    };
  }

  async fetchForecast(fav) {
    // const currentWeather = weatherApi.getCurrentWeatherFAKE(fav.cityid);
    // fav.currentWeather = currentWeather.data[0];
    // this.setState(previousState => ({
    //   favs: [...previousState.favs, fav]
    // }));

    try {
      const currentWeather = await weatherApi.getCurrentWeather(fav.cityid);
      fav.currentWeather = currentWeather.data[0];
      this.setState(previousState => ({
        favs: [...previousState.favs, fav]
      }));
    } catch {}
  }
  async componentDidMount() {
    this.props.favs.forEach(fav => {
      this.fetchForecast(fav);
    });
  }

  render() {
    return (
      <div className="favs">
        <h1 className="montserrat-subrayad favs__title">
          {this.props.favs.length === 0
            ? "You didnt favorited any city yet..."
            : "Your Favs Places"}
        </h1>
        <main className="favs__grid">
          {this.state.favs.map((fav, key) => {
            return (
              <ForecastCurrent
                key={key}
                weatherIcon={fav.currentWeather.WeatherIcon}
                city={fav.location.LocalizedName}
                date={fav.currentWeather.EpochTime}
                temp={fav.currentWeather.Temperature}
                weatherText={fav.currentWeather.WeatherText}
              />
            );
          })}
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    favs: state.favs
  };
};
const mapDispachToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps,mapDispachToProps)(FavoritePage);
