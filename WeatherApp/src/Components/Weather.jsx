import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import Alert from "./Alert";
import moment from "moment";
import cloud1 from "../assets/sun.png";
import sunRise from "../assets/sunrise.png";
import sunSet from "../assets/sunset-.png";
import temperature from "../assets/hot.png";
import wind from "../assets/air.png";
import humidity from "../assets/humidity.png";
import pressure from "../assets/measure.png";
import location from "../assets/longitude.png";
function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const getWeather = async () => {
    const Api_key = "d543d5068dda5f91f04e4a5c2120227d";
    try {
      if (city.trim() === "") {
        setMessage(Alert);
        setError(null);
        setWeather(null);
        return;
      }
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`
      );

      setWeather(res.data);
      setCity("");
      setError(null);
      setMessage(null);
    } catch (error) {
      console.error("Error in fetching", error);
      setWeather(null);
      setError("City Not found! Please search Nearest Location");
      setCity("");
      setMessage(null);
    }
  };

  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => {
        setMessage(null);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError(null);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <>
      <div className="flex items-center flex-col container mx-auto mt-8 bg-gray-800 p-8 rounded-md">
        <h1 className="text-3xl font-bold text-emerald-600 mb-4">
          Weather App
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter city"
            className="border p-2 text-green-600 bg-gray-800"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Get Weather
          </button>
        </div>
      </div>
      {error && <Message pText="Warning!! City Not Found" />}
      {message && <div className="text-red-600 text-3xl mt-4">{message}</div>}
      <div className="flex justify-center mt-20">
        {weather && (
          <div className="relative h-[300px] w-[320px] rounded-md bg-gray">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="mx-4 text-3xl text-center font-semibold text-white">
                  {" "}
                  {weather.name}, {weather.sys.country}
                </h1>
                <div className="mt-2">
                  <p className="flex justify-center items-center text-green-500">
                    <img className="w-8 m-2" src={location} alt="" />
                    {weather.coord.lon}°, {weather.coord.lat}°
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={cloud1} alt="cloud" />
                    {weather.weather[0].description}
                  </p>
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={humidity} alt="cloud" />
                    {weather.main.humidity} g/ <sub>m</sub>3
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={sunRise} alt="cloud" />
                    {moment.unix(weather.sys.sunrise).format("LT")}
                  </p>
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={sunSet} alt="cloud" />
                    {moment.unix(weather.sys.sunset).format("LT")}
                  </p>
                </div>

                <div className="flex justify-center items-center mt-2">
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={wind} alt="cloud" />
                    {weather.wind.speed} m/s {weather.wind.deg}°
                  </p>
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={pressure} alt="cloud" />
                    {weather.main.pressure} hPa
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <p className="text-green-500 flex justify-center items-center">
                    <img className="w-8 m-2" src={temperature} alt="cloud" />
                    {Math.round(weather.main.temp)}°C
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
