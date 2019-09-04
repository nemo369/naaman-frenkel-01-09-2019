import React from "react";
import { HashRouter, Route } from "react-router-dom";

//Pages
import FavoritePage from "./Pages/FavoritePage/FavoritePage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import Header from "./Components/Header";

const Main = ({ nightMode }) => {
  const styles = [
    {
      property: "--black",
      color: "#000",
      nightMode: "#fff"
    },
    {
      property: "--white",
      color: "#fff",
      nightMode: "#000"
    },
    {
      property: "--darkgray",
      color: "#222831",
      nightMode: "#dfdfdf"
    },
    {
      property: "--lightgray",
      color: "#dfdfdf",
      nightMode: "#222831"
    },
    {
      property: "--gradient",
      color: "linear-gradient(135deg, #72edf2 10%, #5151e5 100%)",
      nightMode: "linear-gradient(135deg, #5151e5 10%, #72edf2 100%)"
    }
  ];
  if (nightMode) {
    styles.forEach(style => {
      document.documentElement.style.setProperty(
        style.property,
        style.nightMode
      );
    });
  } else {
      styles.forEach(style => {
        document.documentElement.style.setProperty(
          style.property,
          style.color
        );
      });
  }

  return (
    <main className={`app sitcky-footer ${nightMode ? "night-mode-on" : ""}`}>
      <HashRouter >
        <Header />
        <Route exact path="/" component={WeatherPage} />
        <Route path="/favorite" component={FavoritePage} />
        <Route exact path="/weather/:cityid" component={WeatherPage} />
      </HashRouter>
    </main>
  );
};

export default Main;
