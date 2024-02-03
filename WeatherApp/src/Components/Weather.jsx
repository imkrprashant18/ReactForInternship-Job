import React, { useState } from "react";
import axios from "axios";

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
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">Weather App</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter city"
          className="border p-2 mr-2 text-green-600"
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
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {message && <div className="text-red-600 mt-4">{message}</div>}
      {weather && (
        <div className="mt-4">
          <h2 className="text-xl text-red-600 font-semibold mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="tex-lg">{weather.weather[0].description}</p>
          <p className="text-lg">
            Temperature : {Math.round(weather.main.temp)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
