import React from "react";
import { timeConverter } from "../helpers";
class ForecastFiveDays extends React.Component {
  render() {
    const today =  timeConverter(Date.now(),'day');
    
    const Day = props => (
      <li
        className={
          timeConverter(props.time, "day") === today ? "week-list__li acitve" : "week-list__li"
        }
      >
        <img
              className="day-icon"
              src={`https://developer.accuweather.com/sites/default/files/${props.icon &&
                (parseInt(props.icon) <= 9
                  ? "0" + props.icon
                  : props.icon)}-s.png`}
              alt={props.weatherText}
            />
        <span className="day-name">{timeConverter(props.time, "day")}</span>
        <span className="day-temp">
          {props.temperature}°{props.unit}
        </span>
      </li>
    );
    return (
        <ul className="week-list">
          {this.props.days.map((day, key) => {
            return (
              <Day
                weatherText={day.weatherText}
                icon={day.icon}
                time={day.time}
                temperature={day.temperature}
                unit={day.unit}
                key={key}
              ></Day>
            );
          })}
        </ul>
    );
  }
}
export default ForecastFiveDays;
