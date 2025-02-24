import React, { useState } from "react";
import CityInfo from "./CityInfo";
import { Link } from "react-router-dom"
import './CityList.css';

const CityList = ({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  // update the selected city to match with what is currently picked on
  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  // map what data corresponds with the city selected
  return (
    <div className="container">
      <h1>Cities Application</h1>
      <h2>Cities List</h2>
      <ul className="city-list">
        {cities.map((city) => (
          <li key={city.id}>
            <button onClick={() => handleCityClick(city)} className="city-button">
              {city.name}
            </button>
          </li>
        ))}
      </ul>
      {/* create a link to prompt users to add more cities */}
      <Link to="/CityAdd" className="add-city-link">Add a New City</Link>

      {/* show the city details of selected city */}
      {selectedCity && <CityInfo city={selectedCity} />}
    </div>
  );
};

export default CityList;