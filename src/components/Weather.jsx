import { useState, useEffect } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=62fc5d09db6fdc1597a88e15aff9cf43`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Delhi");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-gray-400 rounded-xl overflow-hidden shadow-md">
        <div className="p-4">
          <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            className="mb-4"
          />
          {loading ? (
            <div className="text-center">Loading....</div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
              </h2>
              <div className="mb-4">{getCurrentDate()}</div>
              <div className="text-4xl font-bold mb-4">
                {weatherData?.main?.temp}
              </div>
              <p className="mb-4">
                {weatherData && weatherData.weather && weatherData.weather[0]
                  ? weatherData.weather[0].description
                  : " "}
              </p>
              <div className="flex flex-col md:flex-row justify-center mb-4">
                <div className="md:mr-8 mb-4 md:mb-0">
                  <p className="text-xl">{weatherData?.wind?.speed}</p>
                  <p>Wind Speed</p>
                </div>
                <div>
                  <p className="text-xl">{weatherData?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
