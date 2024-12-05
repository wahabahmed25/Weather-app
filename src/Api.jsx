//fetch api key using try catch method
//we need location, which is determined by user input content
//const api = 'bla bla'
//const baseurl = 'bla bla
//to put it together, URL = baseurl apiKey location
import { useEffect } from "react"
import { useState } from "react";

import PropTypes from "prop-types";





//hide api key
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const Api = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  




  useEffect(() => {
    if(!location) return; //skip fetch if no location
    console.log("Fetching weather for:", location);


    const fetchWeather = async () => {
      const url = `${BASE_URL}${location}?key=${API_KEY}`;

      try{
        const response = await fetch(url);
        console.log("Response status:", response.status);

        if(!response.ok) throw new Error("Failed to fetch weather data. ");
        const data = await response.json();

        const formattedDate = {
          location: data.resolvedAddress,
          temperature: data.currentConditions.temp,
          condition: data. currentConditions. conditions,
        };

        setWeatherData(formattedDate); //save data to state
        setError(null); //clears previors errors
      } catch(error){
        console.error("error fetching weather: ", error);
        setError(error.message);
        setWeatherData(null) //clear weather data
      }

    }
    fetchWeather();

    
  }, [location]) // re-fetch whenever the location changes



  return (
    <>
      <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
        {error && <p>Error: {error}</p>}
        {!error && !weatherData && location && <p>Loading weather data...</p>}
        {!error && weatherData && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Weather in {weatherData.location}</h2>
            <p>Location: {weatherData.location}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Condition: {weatherData.condition}</p>
          </div>
        )}
      </div>
    </>
  );

  
};


Api.propTypes = {
  location: PropTypes.string.isRequired,
};


export default Api;
