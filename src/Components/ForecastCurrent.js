import React from "react";
import { timeConverter, setBgImage } from "../helpers";

class ForecastCurrent extends React.Component {
  render() {
    const { weatherText, temp, date, city, weatherIcon } = this.props;
    const timeString = timeConverter(date, "date");
    const mainImage = setBgImage(weatherText);
    return (
      <div
        className="forecast__current"
        style={{ backgroundImage: `url("${mainImage}")` }}
      >
        <div className="weather-gradient"></div>
        <div className="date">
          <h2 className="date__string">{timeString && timeString}</h2>
          <i className="location-icon" data-feather="map-pin"></i>
          <span className="location">{city && city}</span>
        </div>
        <div className="weather-container">
          <div className="weather__icon">
            <img
              className="day-icon"
              src={`https://developer.accuweather.com/sites/default/files/${weatherIcon &&
                (parseInt(weatherIcon) <= 9
                  ? "0" + weatherIcon
                  : weatherIcon)}-s.png`}
              alt={weatherText}
            />
          </div>
          <h1 className="weather-temp">
            {temp ? temp.Metric.Value : ""}°{temp ? temp.Metric.Unit : ""}
          </h1>
          <h3 className="weather-desc">{weatherText && weatherText}</h3>
        </div>
      </div>
    );
  }
}
export default ForecastCurrent;
