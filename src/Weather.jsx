//ask userinput for location
//if not a valid location throw error
//when showing location
//display the weather, in farenheigh and celcuis
//rememeber to get api use useEffect() hook


import { useState } from "react";
import PropTypes from "prop-types";





const Weather = ({ location, setLocation, onSubmit }) => {
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setLocation(e.target.value); //update location state
    setError(""); //clear error message
  }
  const handleSubmit = () => {
    console.log("hello world")
    if(!location || location.trim() === ""){
      setError("enter a valid location");
    } else{
      setError("");
      onSubmit(location);
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <input 
        type = "text"
        value = {location}
        onChange = {handleChange}
        placeholder="Enter a location"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"

      />
      <button onClick = {handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
      >Submit</button>
      {error && <p className="text-red-500 text-sm">{error}</p>}

    </div>
  )
}

Weather.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Weather
