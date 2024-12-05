import { useState } from "react";
import Weather from "./Weather"
import Api from "./Api"

const App = () => {
  const [location, setLocation] = useState("")
  const [submitLocation, setSubmitLocation] = useState("");

  const handleSubmitLocation = (location) => {
    setSubmitLocation(location);
  }
;


  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-teal-600 via-indigo-400 to-cyan-300 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-6">Weather Application</h1>
        <div className="bg-white rounded-lg p-6 shadow-lg text-gray-800">
        <Weather location = {location} setLocation = {setLocation} onSubmit = {handleSubmitLocation} />
        </div>
        <div className="mt-8 w-full max-w-md">

          <Api location = {submitLocation} />
        </div>
      </div>
    </>
  )
}

export default App
