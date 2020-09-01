import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "./../../constants/weathers";
import { API_KEY, URL_BASE } from "./../../constants/weatherApi";

import "./styles.css";

const location = "Zaragoza,es";
const api_weather = `${URL_BASE}?q=${location}&appid=${API_KEY}`;

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s",
};

const data2 = {
  temperature: 15,
  weatherState: RAIN,
  humidity: 20,
  wind: "40 m/s",
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Zaragoza",
      data: data,
    };
  }

  handleOnClick = () => {
    fetch(api_weather)
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));

    this.setState({
      data: data2,
    });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data} />
        <button onClick={this.handleOnClick}>Update</button>
      </div>
    );
  }
}

export default WeatherLocation;
