import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Pages
import FavoritePage from "./Pages/FavoritePage/FavoritePage";
import WeatherPage from "./Pages/WeatherPage/WeatherPage";
import Header from "./Components/Header";

const Main = ({nightMode}) => {
  if (nightMode) {
    document.documentElement.style.setProperty('--black','#fff');
    document.documentElement.style.setProperty('--white','#000');
    document.documentElement.style.setProperty('--darkgray','#dfdfdf');
    document.documentElement.style.setProperty('--lightgray','#222831');
    document.documentElement.style.setProperty('--gradient','#blue');
  } else {
    document.documentElement.style.setProperty('--black','');
    document.documentElement.style.setProperty('--white','');
    document.documentElement.style.setProperty('--darkgray','');
    document.documentElement.style.setProperty('--lightgray','');
    document.documentElement.style.setProperty('--gradient','');
  }
  return (
    <main className={`app sitcky-footer ${nightMode ? 'night-mode-on' : ''}`}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={WeatherPage} />
        <Route path="/favorite" component={FavoritePage} />
        <Route exact path="/weather/:cityid" component={WeatherPage} />
      </BrowserRouter>
    </main>
  );
};

export default Main;
