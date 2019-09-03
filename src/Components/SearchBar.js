import React from "react";
import weatherApi from "../vendor/weatherApi";
import Location from "./Location";
import {  toast } from "react-toastify";
import {debounce} from '../helpers'
class SearchBar extends React.Component {
  inputRef = React.createRef();
  constructor(props) {
    super(props);
    this.getLocations = debounce(this.getLocations.bind(this),1000);
    this.state = {
      locations: [],

    };
  }

  clearForm = () => {
    this.setState({ locations: [] });
    this.inputRef.current.value = "";
  };
  searchLocation = (cityid, location) => {
    cityid = parseFloat(cityid);
    this.props.updateCity({ cityid, location });
    this.clearForm();
    // TODO: update pram
  };
  getLocations = async () => {
    const input = this.inputRef.current.value;
    try {
      const locations = await weatherApi.getAutoSearch(input);
      if (locations && locations.data) {
        this.setState({ locations: locations.data });
      }
    } catch {
      const notify = () => toast.error("Oh No! It's us not you");
      notify();
    }
  };
  render() {
    return (
      <section className="search">
        <form
          className={
            this.state.locations.length > 0
              ? "active-dropdown search__form"
              : "search__form"
          }
          placeholder="Search a city"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="text"
            className="search__input"
            ref={this.inputRef}
            name="input"
            onChange={this.getLocations}
          />
          <Location
            locations={this.state.locations}
            searchLocation={this.searchLocation}
          />
          <button className="search__button" hidden>
            Search
          </button>
          <button
            className="search__button search__button--reset"
            type="rest"
            onClick={this.clearForm}
          >
            Clear
          </button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
