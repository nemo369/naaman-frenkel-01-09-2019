import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/actions/actionCreators";
import Moon from "./Moon";

const Header = ({ toglleNightMode }) => {


  return (
    <header className="header">
      <h1 className="header__title montserrat-subrayad"> Herolo </h1>
      <ul className="links">
        <Link to="/">Home</Link>|<Link to="/favorite">Favorite</Link>
      </ul>
      <button onClick={toglleNightMode} className="moon">
        <Moon />
      </button>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    nightMode: state.nightMode
  };
};
const mapDispachToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
