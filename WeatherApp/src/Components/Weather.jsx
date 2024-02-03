import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const getWeather = async () => {
    const Api_key = "d543d5068dda5f91f04e4a5c2120227d";
    try {
      if (city.trim() === "") {
        setMessage("Please enter a city name");
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
    <div className="flex items-center flex-col container mx-auto mt-8 bg-gray-800 p-8 rounded-md">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">Weather App</h1>
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
      {error && (
        <Message
          h1text="City Not Found"
          ptext="Please Enter Valid Name of City!!!"
        />
      )}
      {message && <div className="text-red-600 text-3xl mt-4">{message}</div>}
      {weather && (
        <div className="mt-4">
          <h2 className="text-xl text-red-600 font-semibold mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-lg text-pink-500">
            {weather.weather[0].description}
          </p>
          <p className="text-lg  text-sky-400">
            Temperature : {Math.round(weather.main.temp)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
