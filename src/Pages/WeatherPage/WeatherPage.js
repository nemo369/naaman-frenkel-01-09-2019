import React, { Component } from "react";
import SearchBar from "../../Components/SearchBar";
import Forecast from "../../Components/Forecast";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../store/actions/actionCreators";

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: null,
      isLoading: true
    };
  }

  render() {
    return (
      <main className="main">
        <SearchBar {...this.props} />
        <Forecast {...this.props} />
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    favs: state.favs,
    city: state.city
  };
};
const mapDispachToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(WeatherPage);
