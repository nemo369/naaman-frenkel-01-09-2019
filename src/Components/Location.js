import React from "react";

class Location extends React.Component {
  render() {
    return (
      <div className="search__dropdown">
        {this.props.locations.map((location, key) => {
          return (
            <li key={key}>
              <button data-cityid={location.Key}  onClick={() => this.props.searchLocation(location.Key,location)}>
                {location.LocalizedName}, {location.Country ? location.Country.LocalizedName :''}
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Location;
